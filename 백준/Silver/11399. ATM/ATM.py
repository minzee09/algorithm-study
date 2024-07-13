#사람의 수
N = int(input())

#인출에 걸리는 시간
P = list(map(int, input().split()))

#정렬
P.sort()
result = 0

for i in range(1, len(P)+1):
    result += sum(P[:i])

print(result)