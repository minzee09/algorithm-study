size = int(input())

for i in range(1, size + 1):
  print(" " * (size - i) + "*" * (i * 2 - 1))
for i in range(1, size):
  print(" " * (i) + "*" * ((size - i) * 2 - 1))