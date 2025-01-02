function solution(arr, flag) {
    let X = [];
    arr.forEach((value, i) => {
        if (flag[i]) {
            X = X.concat(Array(value * 2).fill(value));
        } else {
            X = X.slice(0, -value);
        }
    });
    return X;
}
