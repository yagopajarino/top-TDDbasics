const calculator = require("./calculator.js");

test("sum of integers", () => {
  expect(calculator.sum(1, 1)).toBe(2);
});

test("sum of float", () => {
  expect(calculator.sum(1.98, 2.53)).toBeCloseTo(4.51);
});

test("subtract of int", () => {
  expect(calculator.subtract(10, 8)).toBe(2);
});

test("subtract of float", () => {
  expect(calculator.subtract(25.89, 13.52)).toBeCloseTo(12.37);
});

test("divide of int", () => {
  expect(calculator.divide(10, 8)).toBeCloseTo(1.25);
});

test("divide of float", () => {
  expect(calculator.divide(25.89, 13.52)).toBeCloseTo(1.91);
});

test("multiply of int", () => {
  expect(calculator.multiply(10, 8)).toBe(80);
});

test("multiply of float", () => {
  expect(calculator.multiply(25.89, 13.52)).toBeCloseTo(350.03);
});
