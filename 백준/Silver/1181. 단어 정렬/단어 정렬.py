import sys

# 입력을 받습니다.
input = sys.stdin.read
words = input().splitlines()[1:]  # 첫 번째 줄은 단어 개수이므로 제외

# 중복 제거를 위해 set 사용
words = list(set(words))

# 길이와 사전 순으로 정렬
words.sort(key=lambda x: (len(x), x))

# 결과 출력
for word in words:
    print(word)

