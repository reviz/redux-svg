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
  DEFAULT_ALLOW_ZOOM,
  DEFAULT_ZOOM_SMOOTHNESS,
  DEFAULT_MAX_ZOOM_IN,
  DEFAULT_MAX_ZOOM_OUT,
  DEFAULT_ALLOW_PAN,
  SET,
} from "../constants";
import allow from "./allow";
import deny from "./deny";
import initialize from "./initialize";
import pan from "./pan";
import panBy from "./panBy";
import center from "./center";
import resetPan from "./resetPan";
import zoom from "./zoom";
import zoomFromWheelEvent from "./zoomFromWheelEvent";
import resetZoom from "./resetZoom";
import reset from "./reset";
import set from "./set";

export const isPanAllowed = state => state.allowPan;
export const isZoomAllowed = state => state.allowZoom;
export const getViewport = state => state.viewport;
export const getViewBox = state => state.viewBox;
export const getViewBoxString = state => {
  const viewBox = getViewBox(state);

  return `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
};
export const getZoom = state =>
  Math.min(
    getViewport(state).width / getViewBox(state).width,
    getViewport(state).height / getViewBox(state).height
  );
export const getMaxZoomOut = state => state.maxZoomOut;
export const getMaxZoomIn = state => state.maxZoomIn;
export const getCenter = ({ width, height, scale = 1 } = {}) => ({
  x: -width / 2 * scale,
  y: -height / 2 * scale,
});
export const getViewBoxCenter = state => getCenter({ ...getViewBox(state), scale: getZoom(state) });

export const viewport = {
  width: 1366,
  height: 768,
};

export const initialState = {
  viewport,
  viewBox: { x: 0, y: 0, ...viewport },
  allowZoom: DEFAULT_ALLOW_ZOOM,
  zoomSmoothness: DEFAULT_ZOOM_SMOOTHNESS,
  maxZoomIn: DEFAULT_MAX_ZOOM_IN,
  maxZoomOut: DEFAULT_MAX_ZOOM_OUT,
  allowPan: DEFAULT_ALLOW_PAN,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return initialize(state, action);

    case ALLOW_PAN:
      return allow(state, { key: "allowPan" });

    case DENY_PAN:
      return deny(state, { key: "allowPan" });

    case PAN:
      return pan(state, action);

    case PAN_BY:
      return panBy(state, action);

    case CENTER:
      return center(state);

    case RESET_PAN:
      return resetPan(state);

    case ALLOW_ZOOM:
      return allow(state, { key: "allowZoom" });

    case DENY_ZOOM:
      return deny(state, { key: "allowZoom" });

    case ZOOM:
      return zoom(state, action);

    case ZOOM_FROM_WHEEL_EVENT:
      return zoomFromWheelEvent(state, action);

    case RESET_ZOOM:
      return resetZoom(state);

    case RESET:
      return reset(state);

    case SET:
      return set(state, action);

    default:
      return state;
  }
};
