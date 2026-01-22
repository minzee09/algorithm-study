function solution(num_list) {
    var even = "";
    var odd = "";
    for(n of num_list) {
        n % 2 ? even += n : odd += n;
    }
    return Number(even) + Number(odd);
}