const caesarCipher = require("./caesarCipher.js");

test("initial test", () => {
  expect(caesarCipher("attack at dawn")).toBe("fyyfhp fy ifbs");
});

test("all chars", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toBe(
    "fghijklmnopqrstuvwxyzabcde"
  );
});

test("case test", () => {
  expect(caesarCipher("hola QuE tal")).toBe("mtqf vzj yfq");
});

test("punctuation", () => {
  expect(caesarCipher("hola, QuE. tal?")).toBe("mtqf, vzj. yfq?");
});
