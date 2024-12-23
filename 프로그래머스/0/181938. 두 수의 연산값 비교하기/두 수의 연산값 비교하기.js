function solution(a, b) {
    var num_string = a.toString() + b.toString();
    var num_multiply = 2*a*b;
    var answer = num_string >= num_multiply ? parseInt(num_string) : num_multiply;
    return answer;
}