import { getAge, add, getUniqueId } from "./general.ts";

let dob = { year: "1991", months: "2", day: "19" };

test("works out user's age", () => {
  expect(getAge(dob)).toBe(31);
});

// test("add", () => {
//   expect(add(2, 3)).toBe(5);
// });

test("check id is unique", () => {
  expect(getUniqueId(32)).toHaveLength(32);
});
