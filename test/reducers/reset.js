import { expect } from "chai";
import { initialize, pan, zoom } from "../../lib/actions";
import rootReducer from "../../lib/reducers";
import resetReducer from "../../lib/reducers/reset";

describe("reset reducer", () => {
  it("should reset pan to origin and reset zoom to 1", () => {
    const initialState = rootReducer(undefined, initialize(800, 600));
    let state = rootReducer(initialState, pan(10, 10));
    state = rootReducer(state, zoom(0.5));

    const nextState = resetReducer(state);

    expect(nextState).to.deep.equal(initialState);
  });
});
