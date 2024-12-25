function solution(strArr) {
    var answer = [];
    return strArr.filter(num => !num.includes('ad'));
}