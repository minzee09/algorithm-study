function solution(str1, str2) {
    var string1 = str1.split('');
    var string2 = str2.split('');
        var answer = [];
    for(let i = 0; i < string1.length; i++){
        answer.push(string1[i]+string2[i]);
    }

    return answer.join('');
}