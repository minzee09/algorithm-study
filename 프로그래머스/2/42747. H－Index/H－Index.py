def solution(citations):
    answer = 0
    
    citations.sort()
    num = len(citations)
    
    for i in range(num):
        if citations[i] >= num-i:
            return num-i
    
    return answer