function capitalize(word) {
  const c = word.toLowerCase();
  return c.charAt(0).toUpperCase() + c.slice(1);
}

module.exports = capitalize;
