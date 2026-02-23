function solution(arr) {
    var stk = [];
    
    for (let i = 0; i < arr.length; i++) {
        while (stk.length && stk[stk.length - 1] >= arr[i]) {
            stk.pop();
        }
        stk.push(arr[i]);
    }
    
    return stk;
}