function caesarCipher(s) {
  const shift = 5;
  let newStr = "";
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const lower = s.toLowerCase();
  for (let index = 0; index < s.length; index++) {
    const char = lower.charAt(index);
    const charIndex = letters.indexOf(char);
    if (charIndex == -1) {
      newStr += char;
    } else {
      const newChar = letters.charAt((charIndex + shift) % letters.length);
      newStr += newChar;
    }
  }
  return newStr;
}

module.exports = caesarCipher;
