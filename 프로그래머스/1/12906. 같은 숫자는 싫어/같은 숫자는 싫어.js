function solution(arr)
{
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] !== arr[i+1]) answer.push(arr[i])
    }
    return answer;
}

// 마지막 비교 -> 마지막 숫자 !== undefined이기 때문에 마지막 숫자 출력이 됨
// etc. null == undefined -> true, null === undefined -> false