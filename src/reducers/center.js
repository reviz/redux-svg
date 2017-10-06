import { initialState, getViewBox, getViewBoxCenter } from "./";

export default (state = initialState) => ({
  ...state,
  viewBox: {
    ...getViewBox(state),
    ...getViewBoxCenter(state),
  },
});
