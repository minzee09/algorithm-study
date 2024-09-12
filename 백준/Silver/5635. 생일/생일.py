import sys

input = sys.stdin.readlines()

n = int(input[0].strip())
data = []

for i in range(1, n + 1):
    name, day, month, year = input[i].split()
    data.append([name, int(day), int(month), int(year)])

data.sort(key=lambda x: (x[3], x[2], x[1]))

print(data[-1][0])
print(data[0][0])
