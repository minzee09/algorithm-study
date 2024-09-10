import sys

# splitlines()로 빈 줄 자동으로 처리
input = sys.stdin.read().splitlines()

n = int(input[0])
data = []

for i in range(1, n + 1):
    m = input[i].split()
    age = int(m[0])
    name = m[1]
    data.append([age, name])

data.sort(key=lambda x: x[0])

for age, name in data:
    print(age, name)

