function solution(n, slicer, num_list) {
    const func_n = {
    1: (arr, slicer) => arr.slice(0, slicer[1]+1),
    2: (arr, slicer) => arr.slice(slicer[0]),
    3: (arr, slicer) => arr.slice(slicer[0], slicer[1] + 1),
    4: (arr, slicer) => arr.slice(slicer[0], slicer[1] + 1).filter((_, i) => i % slicer[2] === 0)
};
     return func_n[n](num_list, slicer);
}