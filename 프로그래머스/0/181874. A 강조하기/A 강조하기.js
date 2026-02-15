function solution(myString) {
    var answer = '';
    return myString.split('').map(x => x == 'a' || x == 'A' ? x.toUpperCase() : x.toLowerCase()).join('');
}