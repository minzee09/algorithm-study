import sys
input = sys.stdin.readline

N = int(input())
map = [list(map(int, input().strip())) for _ in range(N)]
visited = [[False] * N for _ in range(N)]
result = []
size=0

dy=[0,1,0,-1]
dx=[1,0,-1,0]

def dfs(y,x):
    global size
    size += 1
    for i in range(4):
        ny = y + dy[i]
        nx = x + dx[i]
        if 0<=ny<N and 0<=nx<N:
            if map[ny][nx] == 1 and visited[ny][nx] == False:
                visited[ny][nx] = True
                dfs(ny,nx)

for j in range(N):
    for i in range(N):
        if map[j][i] == 1 and visited[j][i] == False:
            visited[j][i] = True
            size=0
            dfs(j,i)
            result.append(size)
            
result.sort()
print(len(result))
for i in result:
    print(i)