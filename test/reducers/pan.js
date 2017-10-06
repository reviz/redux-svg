import { expect } from "chai";
import { initialize, denyPan, pan } from "../../lib/actions";
import rootReducer, { getViewBox } from "../../lib/reducers";
import panReducer from "../../lib/reducers/pan";

describe("pan reducer", () => {
  it("should leave the state as is if pan is not allowed", () => {
    let state = rootReducer(undefined, initialize(800, 600));
    state = rootReducer(state, denyPan(800, 600));

    const nextState = panReducer(state, pan(10, 10));

    expect(state).to.deep.equal(nextState);
  });

  it("should pan to specified position", () => {
    const state = rootReducer(undefined, initialize(800, 600));
    const nextState = panReducer(state, pan(10, 10));

    expect(getViewBox(nextState).x).to.equal(-10);
    expect(getViewBox(nextState).y).to.equal(-10);
  });
});
