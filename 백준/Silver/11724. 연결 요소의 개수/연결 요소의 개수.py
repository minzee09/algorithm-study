import sys
sys.setrecursionlimit(10000)
 
# DFS 함수 정의
def dfs(node):
    visited[node] = True  # 현재 노드 방문 처리
    for neighbor in graph[node]:  # 해당 노드와 연결된 모든 인접 노드들 탐색
        if not visited[neighbor]:  # 방문하지 않은 노드라면 DFS 실행
            dfs(neighbor)
 
n, m = map(int, input().split())  # 정점 수, 간선 수
graph = [[] for _ in range(n + 1)]  # 그래프 초기화
 
# 그래프 연결 정보 입력 받기
for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)  # 무방향 그래프이므로 양방향 연결
    graph[v].append(u)
 
visited = [False] * (n + 1)  # 방문 여부 체크 배열
count = 0  # 연결 요소 개수
 
# 모든 정점에 대해 탐색
for i in range(1, n + 1):
    if not visited[i]:  # 방문하지 않은 정점이면
        dfs(i)  # DFS로 탐색 시작
        count += 1  # 연결 요소 발견
 
print(count)  # 연결 요소 개수 출력