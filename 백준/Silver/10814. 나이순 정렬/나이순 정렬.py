import sys
input = sys.stdin.readline

N = int(input())
member = []

for _ in range(N):
    age, name = input().split()
    member.append([int(age), str(name)])

member.sort(key=lambda x: x[0])

for age, name in member:
    print(age, name)