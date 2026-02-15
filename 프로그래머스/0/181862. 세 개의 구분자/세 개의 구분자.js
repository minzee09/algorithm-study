function solution(myStr) {
    var answer = myStr.replaceAll('b', 'a').replaceAll('c', 'a').split('a').filter(v => v);
    return answer.length == 0 ? ["EMPTY"] : answer;
}