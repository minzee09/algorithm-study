function solution(my_string, index_list) {
    var answer = '';
    for(let i = 0; i < index_list.length; i++){
        num = index_list[i];
        answer += my_string[num];
    }
    return answer;
}