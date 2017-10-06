import v2 from "v2d";
import { initialState, getViewBox, isPanAllowed } from "./";

/**
 * Pan to a rendered position.
 *
 * @param {Object} state
 * @param {Object} action
 * @return {{viewBox: {}}}
 */
export default (state = initialState, action) => {
  if (isPanAllowed(state)) {
    return {
      ...state,
      viewBox: {
        ...getViewBox(state),
        ...v2.neg(action.payload),
      },
    };
  }

  return state;
};
