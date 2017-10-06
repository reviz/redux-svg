import { initialState, getViewport } from "./";

export default (state = initialState) => ({
  ...state,
  viewBox: {
    ...getViewport(state),
    x: 0,
    y: 0,
  },
});
