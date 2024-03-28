size = int(input())

for i in range(size):
  print(" " * (i) + "*" * ((size - i) * 2 - 1))