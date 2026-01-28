function solution(myString) {
    var answer = [];
    return myString.split('x').map(i => i.length);
}