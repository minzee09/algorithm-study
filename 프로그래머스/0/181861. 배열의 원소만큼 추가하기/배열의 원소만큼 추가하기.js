function solution(arr) {
  return arr.flatMap(i => Array(i).fill(i));
}
