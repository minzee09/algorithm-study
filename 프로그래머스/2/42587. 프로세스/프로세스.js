function solution(priorities, location) {
    let answer = 0;
    let arr = []
    let max_value = Math.max(...priorities);

    //위치 배열 만들기
    for(let i = 0; i < priorities.length; i++){
        arr.push(i);
    }

   //priorities 배열이 비어있을 때까지 반복
    while(priorities.length != 0){
         max_value = Math.max(...priorities); // 계속 업데이트하기 위해
        
        if(priorities[0] < max_value){
            priorities.push(priorities.shift()); // 첫번째 요소를 맨마지막으로 보내기
            arr.push(arr.shift()); // 순서도 저장
        }else {
            answer+=1;
            priorities.shift();
            if(arr.shift() == location)
                return answer;
        }
    }
}

// Math.max에 배열 넘길때는 ... 붙이기
// shift()는 배열의 첫번째 요소, pop()은 배열의 마지막 요소 삭제