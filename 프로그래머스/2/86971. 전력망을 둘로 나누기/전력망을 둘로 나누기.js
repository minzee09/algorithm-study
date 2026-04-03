function solution(n, wires) {
    let answer = Infinity;

    function dfs(node, visited, cutIndex) {
        visited[node] = true;
        let count = 1;

        for (let i = 0; i < wires.length; i++) {
            if (i === cutIndex) continue;

            const [v1, v2] = wires[i];

            if (v1 === node && !visited[v2]) {
                count += dfs(v2, visited, cutIndex);
            } else if (v2 === node && !visited[v1]) {
                count += dfs(v1, visited, cutIndex);
            }
        }

        return count;
    }

    for (let i = 0; i < wires.length; i++) {
        const visited = Array(n + 1).fill(false); //visited[0]은 안씀, 노드가 1부터 시작하기 때문에 맞춤

        const [v1, v2] = wires[i];
        const size = dfs(v1, visited, i);
        const diff = Math.abs(size - (n - size));

        answer = Math.min(answer, diff);
    }

    return answer;
}