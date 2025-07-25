const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

// 그래프 입력
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// 번호 작은 순으로 방문해야 하므로 정렬
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const dfsVisited = Array(N + 1).fill(false);
const bfsVisited = Array(N + 1).fill(false);
const dfsResult = [];
const bfsResult = [];

// DFS - 재귀 방식
function dfs(node) {
  dfsVisited[node] = true;
  dfsResult.push(node);

  for (const next of graph[node]) {
    if (!dfsVisited[next]) {
      dfs(next);
    }
  }
}

// BFS - 큐 사용
function bfs(start) {
  const queue = [start];
  bfsVisited[start] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    bfsResult.push(node);

    for (const next of graph[node]) {
      if (!bfsVisited[next]) {
        bfsVisited[next] = true;
        queue.push(next);
      }
    }
  }
}

// 탐색 실행
dfs(V);
bfs(V);

// 출력
console.log(dfsResult.join(' '));
console.log(bfsResult.join(' '));
