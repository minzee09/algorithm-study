function solution(num_list) {
    var num1 = 1;
    var num2 = 0;
    
    for (let i = 0; i < num_list.length; i++){
        num1 *= num_list[i];
        num2 += num_list[i];
    }
    if(num1 < num2*num2) return 1;
    return 0;
}