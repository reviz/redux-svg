import { expect } from "chai";
import { initialize, pan } from "../../lib/actions";
import rootReducer, { getViewBox } from "../../lib/reducers";
import resetPanReducer from "../../lib/reducers/resetPan";

describe("resetPan reducer", () => {
  it("should reset to the center point", () => {
    let state = rootReducer(undefined, initialize(800, 600));
    state = rootReducer(state, pan(10, 10));

    const nextState = resetPanReducer(state);

    expect(getViewBox(nextState).x).to.equal(0);
    expect(getViewBox(nextState).y).to.equal(0);
  });
});
