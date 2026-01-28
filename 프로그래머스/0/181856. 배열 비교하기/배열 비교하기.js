function solution(arr1, arr2) {
    if (arr1.length === arr2.length) {
        if(arr1.reduce((a,b) => a+b) === arr2.reduce((a,b) => a+b)) return 0;
        else return arr1.reduce((a,b) => a+b) > arr2.reduce((a,b) => a+b) ? 1 : -1;
    }
    return arr1.length > arr2.length ? 1 : -1;
}