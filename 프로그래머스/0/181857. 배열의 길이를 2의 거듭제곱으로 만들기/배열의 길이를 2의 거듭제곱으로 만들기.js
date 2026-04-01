function solution(arr) {
  let len = arr.length;
  let target = 1;

  while (target < len) {
    target *= 2;
  }

  return arr.concat(Array(target - len).fill(0));
}