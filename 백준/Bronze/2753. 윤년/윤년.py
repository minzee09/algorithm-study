l_year = int(input())

if (l_year % 4 == 0 and l_year % 100 != 0) or (l_year % 400 == 0) :
    print(1)
else :
    print(0)