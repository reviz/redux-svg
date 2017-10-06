import { expect } from "chai";
import { initialize, zoom } from "../../lib/actions";
import rootReducer, { getZoom } from "../../lib/reducers";
import zoomReducer from "../../lib/reducers/zoom";

describe("zoom reducer", () => {
  it("should zoom out", () => {
    const state = rootReducer(undefined, initialize(800, 600));
    const nextState = zoomReducer(state, zoom(0.5));

    expect(getZoom(nextState)).to.equal(2);
  });
});
