import v2 from "v2d";
import { initialState, getViewBox, isPanAllowed, getZoom } from "./";

/**
 * Relatively pan the graph by a specified rendered position vector.
 */
export default (state = initialState, action) => {
  if (isPanAllowed(state)) {
    return {
      ...state,
      viewBox: {
        ...getViewBox(state),
        ...v2.sum(
          getViewBox(state),
          v2.scl(v2.dif(action.meta.previous, action.payload), 1 / getZoom(state))
        ),
      },
    };
  }

  return state;
};
