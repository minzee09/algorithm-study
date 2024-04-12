import sys
from bisect import bisect

for _ in range(int(sys.stdin.readline())):
    N, M = map(int, sys.stdin.readline().split())
    a_list = sorted(list(map(int, sys.stdin.readline().split())))
    b_list = sorted(list(map(int, sys.stdin.readline().split())))
    count = 0
    for i in a_list:
        count += (bisect(b_list, i-1))  # a보다 하나 작은 값의 인덱스를 찾는 것
    print(count)