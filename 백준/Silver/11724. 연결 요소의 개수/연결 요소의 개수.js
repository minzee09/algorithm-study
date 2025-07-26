const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

const visited = Array(N + 1).fill(false);

function dfs(node) {
  visited[node] = true;
  for (let next of graph[node]) {
    if (!visited[next]) dfs(next);
  }
}

let count = 0;
for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    count++;
  }
}

console.log(count);