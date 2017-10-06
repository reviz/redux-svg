import { expect } from "chai";
import { initialize, zoom } from "../../lib/actions";
import rootReducer, { getZoom } from "../../lib/reducers";
import resetZoomReducer from "../../lib/reducers/resetZoom";

describe("reset zoom reducer", () => {
  it("should reset the absolute zoom to 1", () => {
    let state = rootReducer(undefined, initialize(800, 600));
    state = rootReducer(state, zoom(0.5));

    const nextState = resetZoomReducer(state);

    expect(getZoom(nextState)).to.equal(1);
  });
});
