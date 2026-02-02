# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A fake mouse/pointer event generator library for jsdom environments. Creates synthetic `MouseEvent` and `PointerEvent` instances with proper `x`/`y` coordinate properties that jsdom's native events lack.

Published as `@masatomakino/fake-mouse-event` on npm.

## Commands

```bash
npm run build          # TypeScript compilation (src/ → bin/)
npm test               # Run tests with Vitest (jsdom environment)
npm run coverage       # Run tests with Istanbul coverage
npx biome ci .         # Lint + format check (CI mode)
npx biome format --write .  # Auto-format files
npx biome check --write .   # Auto-fix lint issues
```

Run a single test file:
```bash
npx vitest --run __test__/FakeMouseEvent.spec.ts
```

## Architecture

```
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
- Pre-push hook runs `biome ci .` and `npm test`
- NPM publishing uses Trusted Publisher (OIDC), triggered by GitHub Release
