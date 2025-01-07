function solution(myStr) {
  var answer = myStr.split(/[abc]/).filter(str => str.length > 0);
  return answer.length > 0 ? answer : ["EMPTY"];
}