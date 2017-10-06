# redux-svg

[![Build Status][travis-svg]][travis-url]

Pan and zoom SVG viewbox with redux.

## Example

https://reviz.github.io/redux-svg/

> see [example/src/](example/src/) for the source

## Actions

### `initialize`

Initialize `viewport` size and `viewBox` size.

- `width` : (`Number`) - the viewport width
- `height` : (`Number`) - the viewport height

### `pan`

Pan to given coordinates.

- `x` : (`Number`)
- `y` : (`Number`)

### `panBy`

Pan by the direction vector between {x, y} and `previous` point.
> use to pan with mouse drag

- `x` : (`Number`)
- `y` : (`Number`)
- `previous` : (`Number`)
  - `x` : (`Number`)
  - `y` : (`Number`)
  
### `pan`

Pan to given coordinates.

- `x` : (`Number`)
- `y` : (`Number`)

### `resetPan`

Reset pan.

### `center`

Center the viewbox.

### `zoom`

Relatively zoom by given scale.

- `scale` : (`Number`)

### `zoomFromWheelEvent`

Helper action that take mouse input to compute the scale.

- `e` : (`WheelEvent`)
- `timeDelta` : (`Number`) time passed since the last mouse wheel event

### `resetZoom`

Reset zoom to 1.

### `allowPan`

Allow pan usage.

### `denyPan`

Forbid pan usage.

### `allowZoom`

Allow zoom usage.

### `denyZoom`

Forbid zoom usage.

### `reset`

Reset pan and zoom.

## Tests

Simply clone the repo, npm install, and run npm test.

## Resources

- [Understanding SVG Coordinate Systems](https://www.sarasoueidan.com/blog/svg-coordinate-systems/) by @SaraSoueidan
- [svg-pan-zoom](https://github.com/ariutta/svg-pan-zoom) by @ariutta
- [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux)

[package-url]: https://npmjs.org/package/redux-svg
[travis-svg]: https://travis-ci.org/reviz/redux-svg.svg
[travis-url]: https://travis-ci.org/reviz/redux-svg
