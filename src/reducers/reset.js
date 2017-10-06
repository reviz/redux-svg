import { initialState } from "./";
import resetPan from "./resetPan";
import resetZoom from "./resetZoom";

export default (state = initialState) => resetPan(resetZoom(state));
