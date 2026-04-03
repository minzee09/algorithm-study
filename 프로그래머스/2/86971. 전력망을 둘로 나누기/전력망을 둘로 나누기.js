function solution(n, wires) {
    let answer = Infinity;
    const visited = Array(n+1).fill(false);
    
    function dfs(node, ignore) {
        visited[node] = true;
        let count = 1;
        
        for (let j = 0; j < wires.length; j++){
            if(j !== ignore) {
                const [v1,v2] = wires[j]
                if (node === v1 && !visited[v2]) count += dfs(v2, ignore);
                if (node === v2 && !visited[v1]) count += dfs(v1, ignore);
            }
        }
        return count;
    }
    
    for (let i = 0; i < wires.length; i++){
        const [v1, v2] = wires[i]
        
        const size = dfs(v1, i);
        const diff = Math.abs(size - (n-size));
        answer = Math.min(answer, diff);
        visited.fill(false);
    }
    
    return answer;
}