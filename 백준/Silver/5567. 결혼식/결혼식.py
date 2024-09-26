from collections import deque

n = int(input())  # 동기의 수 입력 받음
m = int(input())  # 친구 관계의 수 입력 받음

# 친구 관계를 저장할 인접 리스트 초기화
graph = [[] for _ in range(n + 1)]

# 친구 관계 입력 받아서 인접 리스트에 저장
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

visited = [0] * (n + 1)  # 방문 여부를 체크하기 위한 리스트
distance = [0] * (n + 1)  # 상근이로부터의 거리를 저장하는 리스트

queue = deque()
queue.append(1)  # 상근이부터 시작
visited[1] = 1  # 상근이 방문 체크

while queue:
    current = queue.popleft()
    for friend in graph[current]:
        if not visited[friend]:
            visited[friend] = 1  # 방문 체크
            distance[friend] = distance[current] + 1  # 거리 계산
            if distance[friend] <= 2:  # 거리 2 이하인 경우만 큐에 추가
                queue.append(friend)

# 상근이를 제외하고 거리 1 또는 2인 사람의 수를 계산
invite_count = sum(1 for i in range(2, n + 1) if 0 < distance[i] <= 2)

print(invite_count)  # 초대할 사람의 수 출력
