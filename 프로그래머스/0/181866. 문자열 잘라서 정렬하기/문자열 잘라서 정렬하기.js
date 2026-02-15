function solution(myString) {
    var answer = [];
    return myString.split("x").sort().filter(v => v);
}