# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A fake mouse/pointer event generator library for jsdom environments. Creates synthetic `MouseEvent` and `PointerEvent` instances with proper `x`/`y` coordinate properties that jsdom's native events lack.

Published as `@masatomakino/fake-mouse-event` on npm.

## Commands

All npm commands run inside DevContainer for supply chain protection:

```bash
devcontainer exec --workspace-folder . npm run build          # TypeScript compilation (src/ → bin/)
devcontainer exec --workspace-folder . npm test               # Run tests with Vitest (jsdom environment)
devcontainer exec --workspace-folder . npm run coverage       # Run tests with Istanbul coverage
devcontainer exec --workspace-folder . npx biome ci .         # Lint + format check (CI mode)
devcontainer exec --workspace-folder . npx biome format --write .  # Auto-format files
devcontainer exec --workspace-folder . npx biome check --write .   # Auto-fix lint issues
```

Run a single test file:
```bash
devcontainer exec --workspace-folder . npx vitest --run __test__/FakeMouseEvent.spec.ts
```

## Architecture

```text
src/
├── index.ts              # Barrel export
├── FakeMouseEvent.ts     # Core class (extends UIEvent, implements MouseEvent properties)
├── FakeMouseEventInit.ts # Init options interface (extends UIEventInit)
├── FakePointerEvent.ts   # Extends FakeMouseEvent with pointer-specific properties
├── FakePointerEventInit.ts
└── Generator.ts          # Factory functions: getMouseEvent(), getPointerEvent()
```

**Inheritance chain:** `UIEvent` → `FakeMouseEvent` → `FakePointerEvent`

The classes extend `UIEvent` (not `MouseEvent`) because jsdom's `MouseEvent` constructor doesn't properly set coordinate properties. Each class has a protected `init()` method that assigns properties from the init dictionary.

`Generator.ts` provides factory functions (`getMouseEvent`, `getPointerEvent`) with default option initializers that set all coordinates to 0.

## CI

- Tested on Node 20.x and 22.x
- Local development uses DevContainer for npm isolation (supply chain protection)
- Git hooks run biome and tests via DevContainer
- NPM publishing uses Trusted Publisher (OIDC), triggered by GitHub Release
