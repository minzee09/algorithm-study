function solution(a, b, c, d) {
    var answer = 0;

    const counts = {};
    [a, b, c, d].forEach(num => counts[num] = (counts[num] || 0) + 1);

    const uniqueNumbers = Object.keys(counts).map(Number);
    const frequencies = Object.values(counts);

    if (uniqueNumbers.length === 1) {
        answer = 1111 * uniqueNumbers[0];
    } 
    else if (frequencies.includes(3)) {
        const p = uniqueNumbers.find(num => counts[num] === 3);
        const q = uniqueNumbers.find(num => counts[num] === 1);
        answer = Math.pow(10 * p + q, 2);
    } 
    else if (frequencies.every(freq => freq === 2)) {
        const [p, q] = uniqueNumbers;
        answer = (p + q) * Math.abs(p - q);
    } 
    else if (frequencies.includes(2)) {
        const p = uniqueNumbers.find(num => counts[num] === 2);
        const [q, r] = uniqueNumbers.filter(num => counts[num] === 1);
        answer = q * r;
    } 
    else if (uniqueNumbers.length === 4) {
        answer = Math.min(a, b, c, d);
    }

    return answer;
}