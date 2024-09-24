from collections import deque

def find_kinship(n, start, end, relations):
    # 인접 리스트 생성
    graph = [[] for _ in range(n + 1)]
    for x, y in relations:
        graph[x].append(y)
        graph[y].append(x)

    # BFS 탐색
    def bfs(start):
        visited = [-1] * (n + 1)
        queue = deque([start])
        visited[start] = 0

        while queue:
            node = queue.popleft()
            
            # 현재 노드에서 연결된 모든 노드 탐색
            for neighbor in graph[node]:
                if visited[neighbor] == -1:
                    visited[neighbor] = visited[node] + 1
                    queue.append(neighbor)

        return visited

    # 시작 노드로부터 BFS를 통해 촌수 계산
    distances = bfs(start)

    return distances[end]

# 입력 처리
n = int(input())  # 전체 사람 수
start, end = map(int, input().split())  # 촌수를 계산해야 할 두 사람
m = int(input())  # 부모-자식 간 관계의 개수
relations = [tuple(map(int, input().split())) for _ in range(m)]

result = find_kinship(n, start, end, relations)
print(result if result != -1 else -1)
