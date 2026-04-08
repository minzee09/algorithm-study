function solution(arr) {
    const result = [];
    arr.forEach((s, i) => {
      if (s === 2) result.push(i);
    });
    
    const lastIdx = result.length-1;
    
    return result.length ? arr.slice(result[0], result[lastIdx]+1) : [-1];
}