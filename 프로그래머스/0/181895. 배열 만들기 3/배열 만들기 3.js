function solution(arr, intervals) {
    var answer = [];
    for(let i = 0; i < intervals.length;i++)
    answer.push(...arr.slice(intervals[i][0],intervals[i][1]+1))
    return answer;
}