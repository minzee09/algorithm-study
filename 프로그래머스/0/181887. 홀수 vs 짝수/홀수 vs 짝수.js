function solution(num_list) {
    var even = 0;
    var odd = 0;
    for (let i = 0; i < num_list.length; i++) {
        i % 2 == 0 ? even += num_list[i] : odd += num_list[i];
    }
    return Math.max(even, odd);
}