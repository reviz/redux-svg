import { initialState } from "./";

export default (state = initialState, { payload, meta }) => ({
  ...state,
  [meta.key]: payload,
});
