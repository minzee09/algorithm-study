function solution(arr, n) {
    var answer = [];
    if (arr.length % 2){
        answer = arr.map((num,idx) => idx % 2 === 0 ? num + n : num)
    } else {
         answer = arr.map((num,idx) => idx % 2 !== 0 ? num + n : num)
    }
    return answer;
}