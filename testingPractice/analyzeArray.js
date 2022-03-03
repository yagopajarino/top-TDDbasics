function analyzeArray(data) {
  const sum = data.reduce((a, b) => a + b, 0);
  const l = data.length;
  const average = sum / l || 0;
  const min = Math.min(...data);
  const max = Math.max(...data);

  return { average, length: l, min, max };
}

module.exports = analyzeArray;
