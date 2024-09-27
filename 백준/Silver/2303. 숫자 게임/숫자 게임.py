import sys
from itertools import combinations

N = int(sys.stdin.readline())  # 플레이어 수 입력
winner = 0  # 승리한 플레이어 번호
max_value = 0  # 최대 1의 자리 값

for i in range(1, N + 1):
    cards = list(map(int, sys.stdin.readline().split()))  # 각 플레이어의 카드
    max_digit = 0  # 현재 플레이어의 최대 값
    for combo in combinations(cards, 3):  # 3장의 카드 조합
        digit = sum(combo) % 10  # 합의 1의 자리 수
        if digit >= max_digit:
            max_digit = digit
    if max_digit >= max_value:
        max_value = max_digit
        winner = i

print(winner)  # 승리한 플레이어 번호 출력
