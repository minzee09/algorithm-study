function solution(arr1, arr2) {
    var answer = arr1.length < arr2.length ? -1 : 1;
    if (arr1.length == arr2.length) {
        if (arr1.reduce((a,b)=> a+b,0) == arr2.reduce((a,b)=> a+b,0)) return 0;
        else answer = arr1.reduce((a,b)=> a+b,0) < arr2.reduce((a,b)=> a+b,0) ? -1 : 1;
    }
    return answer;
}