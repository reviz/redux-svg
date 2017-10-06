import { expect } from "chai";
import { initialize, denyPan, panBy } from "../../lib/actions";
import rootReducer, { getViewBox } from "../../lib/reducers";
import panByReducer from "../../lib/reducers/panBy";

describe("panBy reducer", () => {
  it("should leave the state as is if panBy is not allowed", () => {
    let state = rootReducer(undefined, initialize(800, 600));
    state = rootReducer(state, denyPan(800, 600));

    const nextState = panByReducer(state, panBy(10, 10, { x: 0, y: 0 }));

    expect(state).to.deep.equal(nextState);
  });

  it("should pan by the specified vector", () => {
    const state = rootReducer(undefined, initialize(800, 600));
    const nextState = panByReducer(state, panBy(10, 10, { x: 0, y: 0 }));

    expect(getViewBox(nextState).x).to.equal(-10);
    expect(getViewBox(nextState).y).to.equal(-10);
  });
});
