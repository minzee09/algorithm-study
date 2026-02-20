function solution(a, d, included) {
    included.map((n,idx) => n === true ? included[idx] = a + d*idx : included[idx] = 0);
    return included.reduce((a,b) => a + b);
}