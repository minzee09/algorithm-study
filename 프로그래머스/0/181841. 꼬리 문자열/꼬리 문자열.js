function solution(str_list, ex) {
     var answer = str_list.filter(str => !str.includes(ex)).join('');
    return answer;
}