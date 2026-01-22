function solution(n, control) {
    let index = {w:1, s:-1, d:10, a:-10};
    for(str of control) n += index[str];
    return n;
}