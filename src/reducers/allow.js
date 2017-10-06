import { initialState } from "./";

export default (state = initialState, { key }) => ({
  ...state,
  [key]: true,
});
