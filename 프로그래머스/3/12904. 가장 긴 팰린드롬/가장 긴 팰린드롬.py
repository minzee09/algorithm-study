def solution(s):
    answer = 1
    for i in range(len(s)):
        for j in range(i+1, len(s)+1):
            new_s = s[i:j]
            if new_s == new_s[::-1]:
                answer = max(answer, len(new_s))
    return answer