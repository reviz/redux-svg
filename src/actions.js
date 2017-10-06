import {
  INITIALIZE,
  ALLOW_PAN,
  DENY_PAN,
  PAN,
  PAN_BY,
  CENTER,
  RESET_PAN,
  ALLOW_ZOOM,
  DENY_ZOOM,
  ZOOM,
  ZOOM_FROM_WHEEL_EVENT,
  RESET_ZOOM,
  RESET,
} from "./constants";

export const initialize = (width, height) => ({
  type: INITIALIZE,
  payload: { width, height },
  meta: {},
});

export const allowPan = () => ({
  type: ALLOW_PAN,
  payload: null,
  meta: {},
});

export const denyPan = () => ({
  type: DENY_PAN,
  payload: null,
  meta: {},
});

export const pan = (x, y) => ({
  type: PAN,
  payload: { x, y },
  meta: {},
});

export const panBy = (x, y, previous = { x: 0, y: 0 }) => ({
  type: PAN_BY,
  payload: { x, y },
  meta: { previous },
});

export const center = () => ({
  type: CENTER,
  payload: null,
  meta: {},
});

export const resetPan = () => ({
  type: RESET_PAN,
  payload: null,
  meta: {},
});

export const allowZoom = () => ({
  type: ALLOW_ZOOM,
  payload: null,
  meta: {},
});

export const denyZoom = () => ({
  type: DENY_ZOOM,
  payload: null,
  meta: {},
});

export const zoom = (scale = 1) => ({
  type: ZOOM,
  payload: scale,
  meta: {},
});

export const zoomFromWheelEvent = (e, timeDelta) => ({
  type: ZOOM_FROM_WHEEL_EVENT,
  payload: e,
  meta: { timeDelta },
});

export const resetZoom = () => ({
  type: RESET_ZOOM,
  payload: null,
  meta: {},
});

export const reset = () => ({
  type: RESET,
  payload: null,
  meta: {},
});
