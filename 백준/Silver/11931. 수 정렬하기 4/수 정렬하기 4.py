import sys

N = int(sys.stdin.readline())
num = [int(sys.stdin.readline()) for _ in range(1, N+1)]

num.sort(reverse=True)

for i in num:
    print(i)
