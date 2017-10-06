import { initialState } from "./";

export default (state = initialState, action) => ({
  ...state,
  viewport: action.payload,
  viewBox: {
    ...action.payload,
    x: 0,
    y: 0,
  },
});
