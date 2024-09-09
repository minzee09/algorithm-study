import sys

# 입력 받기
input = sys.stdin.read
n = list(map(int, input().split()))

# sum(n[2:])을 계산하고, 그 값이 100이면 True 반환
def check_initial_sum(n):
    return sum(n[2:]) == 100

# 주어진 n 배열에서 해를 찾는 함수
def find_solution(n):
    target = sum(n[2:]) - 100  # n[2:] 부분 합에서 100을 뺀 값
    # n[2]부터 끝까지 돌면서 처리
    for i in range(2, len(n)):
        # n[0]과 n[i] 비교
        if n[i] - n[0] == target:
            n[0], n[i] = n[i], n[0]  # 바로 스왑
            return True
        
        # n[1]과 n[i] 비교
        if n[i] - n[1] == target:
            n[1], n[i] = n[i], n[1]  # 바로 스왑
            return True
    
    return False  # 해를 찾지 못하면 False 반환

# 스왑을 시도하고 해를 다시 찾는 함수
def swap_and_find_solution(n):
    for i in range(2, len(n), 2):  # n[0]과 n[2], n[4], ... 스왑
        for j in range(3, len(n), 2):  # n[1]과 n[3], n[5], ... 스왑
            n[0], n[i] = n[i], n[0]
            n[1], n[j] = n[j], n[1]

            # 다시 find_solution 호출
            if find_solution(n):
                return True
    return False  # 해를 찾지 못함

# 메인 로직을 실행하는 함수
def solve():
    # 1. sum(n[2:])이 100인지 체크
    if check_initial_sum(n):
        return True

    # 2. find_solution 시도
    if find_solution(n):
        return True

    # 3. 해를 찾지 못했을 경우 스왑 진행하고 다시 시도
    if swap_and_find_solution(n):
        return True

    return False

# 문제 해결 함수 실행
if solve():
    # n[0], n[1]을 제외한 값들을 정렬 후 출력
    result = n[2:]
    result.sort()
    for value in result:
        print(value)
