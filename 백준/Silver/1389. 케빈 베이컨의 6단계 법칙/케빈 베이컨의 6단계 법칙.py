N, M = map(int, input().split())
graph = [[1000] * (N+1) for _ in range(N+1)]

for _ in range(M):
    a, b = map(int, input().split())
    graph[a][b] = 1
    graph[b][a] = 1

for k in range(1, N+1):
    for a in range(1, N+1):
        for b in range(1, N+1):
            graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

min_sum = 1e9
answer = 0

for i in range(len(graph)):
    if sum(graph[i]) < min_sum:
        min_sum = sum(graph[i])
        answer = i

print(answer)