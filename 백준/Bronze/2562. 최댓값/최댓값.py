import sys
input = sys.stdin.readline

num = [int(input()) for _ in range(9)]
result = num[0]
index = 1

for i in range(len(num)):
    if result < num[i]:
        result = num[i]
        index = i+1

print(result)
print(index)