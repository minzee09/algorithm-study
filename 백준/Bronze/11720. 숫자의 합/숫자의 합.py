import sys
input = sys.stdin.readline

n = int(input())
num = int(input())
result = 0

for _ in range(n):
    result += num % 10
    num //= 10

print(result)