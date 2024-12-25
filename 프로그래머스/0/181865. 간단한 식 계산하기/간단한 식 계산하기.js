function solution(binomial) {
    const operation = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
    };
    const [a, op, b] = binomial.split(' ');
    
    return operation[op](Number(a), Number(b));
}