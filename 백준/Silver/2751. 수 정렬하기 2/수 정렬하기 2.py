import sys
input = sys.stdin.readline

N = int(input())
result = [int(input()) for _ in range(N)]

result.sort()

for i in result:
    print(i)