import { initialState } from "./";
import zoom from "./zoom";
import getScaleFromWheelEvent from "../utils/getScaleFromWheelEvent";

export default (state = initialState, action) =>
  zoom(state, {
    payload: getScaleFromWheelEvent(action.payload, { ...action.meta }),
  });
