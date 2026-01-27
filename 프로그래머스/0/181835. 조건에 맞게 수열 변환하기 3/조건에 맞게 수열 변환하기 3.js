function solution(arr, k) {
    var answer = [];
    for (let a of arr)
        if (k % 2 === 0) answer.push(a+k)
        else answer.push(a*k)
    
    return answer;
}