import sys
input = sys.stdin.readline()

num = list(map(int, input.split()))

for i in range(len(num) - 1):
  for j in range(0, len(num) - (i + 1)):
    if (num[j] > num[j + 1]):
        num[j], num[j + 1] = num[j + 1], num[j]
        print(*num)