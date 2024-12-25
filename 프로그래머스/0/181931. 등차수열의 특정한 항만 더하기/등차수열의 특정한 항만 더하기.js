function solution(a, d, included) {
    var answer = 0;
    var sum = a;
    for (let i = 0; i < included.length; i++){
        if (included[i]){
            answer += sum;
        }
        sum += d;
    }
    return answer;
}