function solution(n) {
    var even = 0;
    var odd = 0;
    for (let i = 1; i <= n; i++){
        if (n % 2 == 0 && i % 2 == 0){
            even += i*i;
        }else if (i % 2 == 1) odd += i;
        
    }
    if (even > 0) return even;
    return odd;
}