function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i in intStrs){
        var split_num = intStrs[i].slice(s,s+l)
        if(split_num > k) answer.push(Number(split_num))
    }
    return answer;
}