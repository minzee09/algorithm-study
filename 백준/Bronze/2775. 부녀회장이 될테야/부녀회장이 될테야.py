import sys
input = sys.stdin.readline

T = int(input()) 

for _ in range(T):
    k = int(input())  # 층
    n = int(input())  # 호
    
    # 아파트 리스트 초기화
    apart = [[i for i in range(1, n + 1)]]
    
    # 각 층별 사람 수 계산
    for floor in range(1, k + 1):
        floor_list = []
        for room in range(n):
            floor_list.append(sum(apart[floor-1][:room+1]))
        apart.append(floor_list)
    
    print(apart[k][n-1])
