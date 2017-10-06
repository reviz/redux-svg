import v2 from "v2d";
import { initialState, isZoomAllowed, getZoom, getMaxZoomOut, getMaxZoomIn, getViewBox } from "./";

export default (state = initialState, { payload }) => {
  if (!isZoomAllowed(state)) {
    return state;
  }

  // fit scale in set bounds
  if (getZoom(state) / payload < getMaxZoomOut(state)) {
    payload = getMaxZoomOut(state) / getZoom(state);
  } else if (getZoom(state) / payload > getMaxZoomIn(state)) {
    payload = getMaxZoomIn(state) / getZoom(state);
  }

  return {
    ...state,
    viewBox: {
      ...v2.sum(getViewBox(state), v2.dif(v2.scl(getViewBox(state), payload), getViewBox(state))),
      width: getViewBox(state).width * payload,
      height: getViewBox(state).height * payload,
    },
  };
};
