function solution(answers) {
    const n1 = [1, 2, 3, 4, 5];
    const n2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const n3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let score1 = 0, score2 = 0, score3 = 0;
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === n1[i % n1.length]) score1++;
        if (answers[i] === n2[i % n2.length]) score2++;
        if (answers[i] === n3[i % n3.length]) score3++;
    }
    
    const maxScore = Math.max(score1, score2, score3);
    const answer = [];
    if (score1 === maxScore) answer.push(1);
    if (score2 === maxScore) answer.push(2);
    if (score3 === maxScore) answer.push(3);
    
    return answer;
}
