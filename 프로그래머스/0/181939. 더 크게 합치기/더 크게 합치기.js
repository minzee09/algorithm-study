function solution(a, b) {
    num1 = a.toString() + b.toString();
    num2 = b.toString() + a.toString();
    
    var answer = num1 < num2 ? num2 : num1;
    return parseInt(answer);
}