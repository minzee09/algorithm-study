function solution(code) {
    let mode = false;
    let answer = [];
    for (let idx = 0; idx < code.length; idx++){
        if (code[idx] === '1') {
            mode = !mode;
            continue;
        };
        if (idx % 2 === 0 && !mode) answer.push(code[idx]);
        else if (idx % 2 !== 0 && mode) answer.push(code[idx]);
            
    }

    const result = answer.join('');
    return result === '' ? "EMPTY" : result;
}