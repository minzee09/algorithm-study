function solution(s){
    var answer = true;
    const stack = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            stack.push(s[i]);
        } else {
            if (stack.length === 0) return false; // pop은 비어있을때도 실행되기 때문
            stack.pop();
        }
    }

    return stack.length === 0;
}