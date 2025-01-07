function solution(strArr) {
  const lengthCount = {};

  strArr.forEach(str => {
    const len = str.length;
    lengthCount[len] = (lengthCount[len] || 0) + 1;
  });

  return Math.max(...Object.values(lengthCount));
}
