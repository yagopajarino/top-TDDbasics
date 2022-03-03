function reverseString(s) {
  let newString = "";
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    newString = char + newString;
  }
  return newString;
}

module.exports = reverseString;
