import { DEFAULT_ZOOM_SMOOTHNESS } from "../constants";

/**
 * Compute scale from the mouse wheel event.
 *
 * @author Anders Riutta
 *
 * @param {WheelEvent} e
 * @param {number} timeDelta time elapsed between the last wheel event
 * @param {number} smoothness the smoothness of the scale
 * @return {number}
 */
export default (e, { timeDelta = 0, smoothness = DEFAULT_ZOOM_SMOOTHNESS } = {}) => {
  // Default delta in case that deltaY is not available
  let delta = e.deltaY || 1;
  const divider = 3 + Math.max(0, 30 - timeDelta);

  // Make empirical adjustments for browsers that give deltaY in pixels (deltaMode=0)
  if ("deltaMode" in e && e.deltaMode === 0 && e.wheelDelta) {
    delta = e.deltaY === 0 ? 0 : Math.abs(e.wheelDelta) / e.deltaY;
  }

  delta =
    delta > -0.3 && delta < 0.3
      ? delta
      : (delta > 0 ? 1 : -1) * Math.log(Math.abs(delta) + 10) / divider;

  return (1 + smoothness) ** delta;
};
