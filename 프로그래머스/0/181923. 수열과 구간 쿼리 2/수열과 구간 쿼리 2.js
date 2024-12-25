function solution(arr, queries) {
    var answer = [];
    for(let i = 0; i < queries.length; i++){
        var list = arr.slice(queries[i][0],queries[i][1]+1);
        var filtered = list.filter(num => num > queries[i][2]);
        if (filtered.length > 0) {
            answer.push(Math.min(...filtered));
        } else {
            answer.push(-1);
        }
    }
    return answer;
}