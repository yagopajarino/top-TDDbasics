const capitalize = require("./capitalize.js");

test("one word string", () => {
  expect(capitalize("hola")).toBe("Hola");
});

test("one word all caps", () => {
  expect(capitalize("GENIAL")).toBe("Genial");
});

test("two words string", () => {
  expect(capitalize("buenos dias")).toBe("Buenos dias");
});

test("string with caps", () => {
  expect(capitalize("hola Que tal")).toBe("Hola que tal");
});

test("all caps", () => {
  expect(capitalize("BUENOS DIAS")).toBe("Buenos dias");
});
