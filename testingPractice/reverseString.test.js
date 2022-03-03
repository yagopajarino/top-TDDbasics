const reverseString = require("./reverseString.js");

test("one letter string", () => {
  expect(reverseString("a")).toBe("a");
});

test("two letter string", () => {
  expect(reverseString("ab")).toBe("ba");
});

test("two words string odd", () => {
  expect(reverseString("buenos dias")).toBe("said soneub");
});

test("two words string even", () => {
  expect(reverseString("real celta")).toBe("atlec laer");
});

test("long string", () => {
  expect(reverseString("asdfghjklñ")).toBe("ñlkjhgfdsa");
});
