import sys
input = sys.stdin.readline

n = int(input())
num = list(map(int, input().split()))

num.sort()

print(num[0], num[n-1])