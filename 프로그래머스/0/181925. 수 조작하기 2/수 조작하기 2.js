function solution(numLog) {
    const controller = {
        '1' : 'w',
        '-1' : 's',
        '10' : 'd',
        '-10' : 'a',
    };
    
    var answer = '';
    for(let i = 0; i < numLog.length-1; i++){
        answer += String(controller[numLog[i+1]-numLog[i]]);
    }
    return answer;
}