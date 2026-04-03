function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(false);
    let answer = 0;
    
    function dfs(health, count) {
        answer = Math.max(answer, count);
        
        for (let i = 0; i < dungeons.length; i++){
            const [need, minus] = dungeons[i];
            
            if(!visited[i] && health >= need){
                visited[i] = true;
                dfs(health - minus, count + 1);
                visited[i] = false;
            }
        }
    }

    dfs(k, 0);

    return answer;
}