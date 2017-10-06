import { expect } from "chai";
import { initialize } from "../../lib/actions";
import rootReducer, { getViewBox } from "../../lib/reducers";
import centerReducer from "../../lib/reducers/center";

describe("center reducer", () => {
  it("should center to -400 -300 given a view box of 800x600", () => {
    const state = rootReducer(undefined, initialize(800, 600));
    const nextState = centerReducer(state);

    expect(getViewBox(nextState).x).to.equal(-400);
    expect(getViewBox(nextState).y).to.equal(-300);
  });
});
