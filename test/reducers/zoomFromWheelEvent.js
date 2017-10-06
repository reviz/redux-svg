import { expect } from "chai";
import { initialize, zoomFromWheelEvent } from "../../lib/actions";
import rootReducer, { getZoom } from "../../lib/reducers";
import zoomFromWheelEventReducer from "../../lib/reducers/zoomFromWheelEvent";

describe("zoomFromWheelEvent reducer", () => {
  it("should zoom in", () => {
    const state = rootReducer(undefined, initialize(800, 600));
    const nextState = zoomFromWheelEventReducer(
      state,
      zoomFromWheelEvent({ deltaY: -53, deltaMode: 0, wheelDelta: 120 }, Date.now())
    );

    expect(getZoom(nextState)).to.be.above(1);
  });

  it("should zoom out", () => {
    const state = rootReducer(undefined, initialize(800, 600));
    const nextState = zoomFromWheelEventReducer(
      state,
      zoomFromWheelEvent({ deltaY: 53, deltaMode: 0, wheelDelta: 120 }, Date.now())
    );

    expect(getZoom(nextState)).to.be.below(1);
  });
});
