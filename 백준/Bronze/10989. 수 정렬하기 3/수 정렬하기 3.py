import sys
input = sys.stdin.readline

N = int(input())
list = [0] * (10000 + 1)

for _ in range(N):
    list[int(input())] += 1
  
for i in range(len(list)):
    if list[i] != 0:
        for _ in range(list[i]):
            print(i)