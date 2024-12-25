function solution(arr, idx) {
    const slicedIndex = arr.slice(idx).indexOf(1);
    return slicedIndex === -1 ? -1 : slicedIndex + idx;
}