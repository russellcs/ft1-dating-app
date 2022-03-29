import { findDistanceFromLongsAndLats } from "../utils/general";
import { distanceCheck } from "../utils/matching.js";
import { matchingInitialState } from "../redux/matchingInitialState";

test("find distance between two locations with longitude and latitude", () => {
  expect(
    findDistanceFromLongsAndLats(
      { latitude: 0, longitude: 0 },
      { latitude: 0, longitude: 0 }
    )
  ).toBeCloseTo(0, 0.1);

  expect(
    findDistanceFromLongsAndLats(
      { latitude: 0, longitude: 0 },
      { latitude: 50, longitude: 50 }
    )
  ).toBeGreaterThan(6500);

  expect(
    findDistanceFromLongsAndLats(
      { latitude: 0, longitude: 0 },
      { latitude: 50, longitude: 50 }
    )
  ).toBeLessThan(7500);

  expect(1).toBeGreaterThan(0);
  expect(1).toBeLessThan(3);
});

test("calculate if within acceptable distance", () => {
  expect(
    distanceCheck(matchingInitialState.users[0], matchingInitialState.users[1])
  ).toBe(true);
});
