function solution(array, commands) {
    let answer = [];
    for (let i = 0; i < commands.length; i++) {
        const [start,end,index] = commands[i];
        const arr = array.slice(start-1, end).sort((a,b) => a-b);
        answer.push(arr[index-1]);
    }

    return answer;
}