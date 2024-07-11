def get_change(money):
    # 동전 단위 (미국 동전 기준: 쿼터(25센트), 다임(10센트), 니켈(5센트), 페니(1센트))
    coins = [25, 10, 5, 1]
    change = []

    for coin in coins:
        change.append(money // coin)  # 해당 동전의 개수
        money %= coin  # 남은 돈

    return change

# 입력
t = int(input())  # 테스트 케이스 수
for _ in range(t):
    money = int(input())
    change = get_change(money)
    print(" ".join(map(str, change)))
