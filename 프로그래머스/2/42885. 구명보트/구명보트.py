def solution(people, limit):
    answer = 0
    
    people.sort()
    
    start = 0
    end = len(people) - 1
    
    while(start <= end):
        if(people[start] + people[end] <= limit): #리미트 100보다 작아야하기 떄문
            start +=1
            end -=1
        else:
            end-=1
        answer += 1
        
    return answer