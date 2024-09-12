import sys

input = sys.stdin.read

lines = input().splitlines()
N, K = map(int, lines[0].split())

scores = list(map(int, lines[1].split()))

scores.sort(reverse=True)
print(scores[K-1])
