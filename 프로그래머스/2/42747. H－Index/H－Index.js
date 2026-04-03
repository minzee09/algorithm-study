function solution(citations) {
    let answer = 0;
    let over = 0;
    let under = 0;
    
    for(let i = 0; i <= citations.length; i++){
        for(let c of citations){
            if (c >= i) over++;
            else {
                if(c <= i) under++;
            }
        }
        if(over >= i && under <= i && over + under === citations.length){
            answer = Math.max(answer, i)
        }
        over = 0;
        under = 0;
    }
    return answer;
}