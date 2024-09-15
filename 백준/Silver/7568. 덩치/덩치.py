import sys
N = int(sys.stdin.readline().strip())
people = []

for _ in range(N):
    weight, height = map(int, sys.stdin.readline().split())
    people.append((weight, height))

ranks = [1] * N  # 모든 사람의 초기 등수를 1로 설정

for i in range(N):
    for j in range(N):
        if i != j:
            if people[i][0] < people[j][0] and people[i][1] < people[j][1]:
                ranks[i] += 1

print(' '.join(map(str, ranks)))