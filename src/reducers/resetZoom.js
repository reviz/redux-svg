import { initialState, getZoom } from "./";
import zoom from "./zoom";

export default (state = initialState) => zoom(state, { payload: getZoom(state) });
