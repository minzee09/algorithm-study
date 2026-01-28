function solution(strArr) {
    var answer = [];
    for (let i = 0; i < strArr.length; i++) {
        answer.push(i % 2 === 0 ? strArr[i].toLowerCase() : strArr[i].toUpperCase());
    }
    return answer;
}