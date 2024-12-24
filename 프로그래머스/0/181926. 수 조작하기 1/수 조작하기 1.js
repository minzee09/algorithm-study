function solution(n, control) {
    keys = {
        'w':1,
        's':-1,
        'd':10,
        'a':-10,
    };
   
    for(let char of control){
        n+=keys[char];
    }
    
    return n;
}