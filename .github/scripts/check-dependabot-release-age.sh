#!/usr/bin/env bash
# Prints eligible=true to GITHUB_OUTPUT only when every package entry that the pull request adds to
# pnpm-lock.yaml was published at least minimumReleaseAge minutes ago. An entry whose publish time
# cannot be read makes the pull request ineligible.
set -euo pipefail

: "${REPO:?}" "${BASE_SHA:?}" "${HEAD_SHA:?}"

summary="${GITHUB_STEP_SUMMARY:-/dev/stdout}"
output="${GITHUB_OUTPUT:-/dev/stdout}"
workdir="$(mktemp -d)"

fetch_file() {
  gh api -H 'Accept: application/vnd.github.raw' "repos/${REPO}/contents/$1?ref=$2"
}

# Keys of the packages section of a pnpm lockfile, such as '@scope/name@1.2.3' or name@1.2.3.
package_keys() {
  awk '
    /^packages:/ { in_packages = 1; next }
    /^[^ ]/ { in_packages = 0 }
    in_packages && /^  [^ ]/ {
      key = $0
      sub(/^  /, "", key)
      sub(/:( \{\})?[[:space:]]*$/, "", key)
      gsub(/\047/, "", key)
      print key
    }
  ' | sort -u
}

fetch_file pnpm-lock.yaml "$BASE_SHA" | package_keys > "${workdir}/base"
fetch_file pnpm-lock.yaml "$HEAD_SHA" | package_keys > "${workdir}/head"
comm -13 "${workdir}/base" "${workdir}/head" > "${workdir}/added"

min_minutes="$(fetch_file pnpm-workspace.yaml "$BASE_SHA" | awk '/^minimumReleaseAge:/ { print $2 }')"
case "$min_minutes" in
  '' | *[!0-9]*)
    echo "minimumReleaseAge is not set in pnpm-workspace.yaml at ${BASE_SHA}." >> "$summary"
    echo "eligible=false" >> "$output"
    exit 0
    ;;
esac

now="$(date +%s)"
eligible=true
{
  echo "### Release age of new lockfile entries"
  echo
  echo "Threshold: ${min_minutes} minutes"
  echo
  echo "| Entry | Age (minutes) | Result |"
  echo "| --- | --- | --- |"
} >> "$summary"

while IFS= read -r key; do
  name="${key%@*}"
  version="${key##*@}"
  encoded="$(printf '%s' "$name" | sed 's|/|%2F|')"
  published="$(curl -fsSL "https://registry.npmjs.org/${encoded}" | jq -r --arg v "$version" '.time[$v] // empty')" || published=""

  if [ -z "$name" ] || [ -z "$published" ]; then
    eligible=false
    echo "| \`${key}\` | unknown | blocked |" >> "$summary"
    continue
  fi

  published_epoch="$(jq -rn --arg t "$published" '$t | sub("\\.[0-9]+Z$"; "Z") | fromdateiso8601')"
  age=$(( (now - published_epoch) / 60 ))
  if [ "$age" -lt "$min_minutes" ]; then
    eligible=false
    echo "| \`${key}\` | ${age} | blocked |" >> "$summary"
  else
    echo "| \`${key}\` | ${age} | ok |" >> "$summary"
  fi
done < "${workdir}/added"

if [ ! -s "${workdir}/added" ]; then
  echo "No new entries." >> "$summary"
fi

echo "eligible=${eligible}" >> "$output"
