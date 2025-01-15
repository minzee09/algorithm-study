function solution(progresses, speeds) {
    var answer = [];
    var days = progresses.map((progress,idx)=>Math.ceil((100-progress)/speeds[idx]));
    var count = 1;
    var maxDay = days[0]
    
    for(let i = 1; i < speeds.length; i++){
        if(days[i] <= maxDay){
            count++;
        } else {
            maxDay = days[i];
            answer.push(count);
            count = 1;
        }
    }
    answer.push(count); // 나머지도 푸쉬
    return answer;
}

// Math.ceil -> 올림 함수