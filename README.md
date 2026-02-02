# fake-mouse-event

> Fake mouse event generator with x/y properties for jsdom.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![npm version](https://img.shields.io/npm/v/@masatomakino/fake-mouse-event.svg?style=flat)](https://www.npmjs.com/package/@masatomakino/fake-mouse-event)
[![test](https://github.com/MasatoMakino/fake-mouse-event/actions/workflows/ci_main.yml/badge.svg?branch=main)](https://github.com/MasatoMakino/fake-mouse-event/actions/workflows/ci_main.yml)

## Why

jsdom's `MouseEvent` constructor does not properly set coordinate properties such as `x`, `y`, `offsetX`, and `offsetY`. This library provides synthetic `MouseEvent` and `PointerEvent` instances with correct coordinate values for testing event-driven code in jsdom environments.

## Installation

```shell
npm i @masatomakino/fake-mouse-event -D
```

## Usage

### Factory Functions

Use `getMouseEvent` and `getPointerEvent` to create events with sensible defaults.

```ts
import { getMouseEvent, getPointerEvent } from "@masatomakino/fake-mouse-event";

// Basic mouse event (all coordinates default to 0)
const click = getMouseEvent("click");

// Mouse event with custom coordinates
const clickAt = getMouseEvent("click", {
  x: 100,
  y: 100,
  offsetX: 150,
  offsetY: 150,
});

// Pointer event
const pointerDown = getPointerEvent("pointerdown", {
  x: 100,
  y: 100,
  pointerId: 1,
});
```

### Dispatching Events

Created events can be dispatched to DOM elements as usual.

```ts
const canvas = document.createElement("canvas");
canvas.addEventListener("click", (e) => {
  console.log(e.x, e.y); // 100, 100
});

const event = getMouseEvent("click", { x: 100, y: 100 });
canvas.dispatchEvent(event);
```

## API

### `getMouseEvent(type, options?)`

Returns a `FakeMouseEvent` instance (extends `UIEvent`, implements `MouseEvent`).

Defaults: `bubbles: true`, `cancelable: true`, all coordinates: `0`.

### `getPointerEvent(type, options?)`

Returns a `FakePointerEvent` instance (extends `FakeMouseEvent`).

Additional defaults: `pointerId: 0`, `pointerType: "mouse"`, `isPrimary: true`.

### `FakeMouseEventInit`

Extends [`UIEventInit`](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/UIEvent#options). Key properties:

| Category | Properties |
| --- | --- |
| Coordinates | `x`, `y`, `clientX`, `clientY`, `screenX`, `screenY`, `offsetX`, `offsetY`, `pageX`, `pageY` |
| Modifiers | `altKey`, `ctrlKey`, `shiftKey`, `metaKey` |
| Button | `button`, `buttons` |
| Movement | `movementX`, `movementY` |

### `FakePointerEventInit`

Extends `FakeMouseEventInit`. Additional properties:

`pointerId`, `width`, `height`, `pressure`, `tangentialPressure`, `tiltX`, `tiltY`, `twist`, `pointerType`, `isPrimary`

## License

[MIT](LICENSE)
