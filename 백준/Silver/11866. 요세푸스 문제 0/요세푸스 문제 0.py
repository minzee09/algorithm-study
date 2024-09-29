N, K = map(int, input().split())
people = list(range(1, N + 1))    # 사람들 리스트 생성
result = []    # 제거된 사람들 저장

index = 0 
while people:
    index = (index + K - 1) % len(people)    # 다음 인덱스 계산
    result.append(people.pop(index))    # 사람 제거 및 결과 추가

print("<" + ", ".join(map(str, result)) + ">")
