function solution(arr) {
  let length = arr.length;
  let nextPowerOfTwo = 1;

  while (nextPowerOfTwo < length) {
    nextPowerOfTwo *= 2;
  }

  while (arr.length < nextPowerOfTwo) {
    arr.push(0);
  }

  return arr;
}
