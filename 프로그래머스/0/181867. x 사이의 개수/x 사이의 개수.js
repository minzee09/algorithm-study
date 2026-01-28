function solution(myString) {
    var answer = [];
    let count = 0;
    for(let i = 0; i < myString.length; i++) {
        if (myString[i] == 'x') {
            answer.push(count);
            count = 0;
        }
        else count++;
    }
    answer.push(count);
    return answer;
}