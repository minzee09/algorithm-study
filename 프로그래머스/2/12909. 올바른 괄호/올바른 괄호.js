// openBraces => ( 왼쪽 괄호
// )괄호 마주했을때 openBraces 스택에 ( 존재해야 true, 없으면 false 반환
// (괄호면 openBraces에 push
// for루프 뒤에도 openBraces에 값 존재하면 false 반환

function solution(s){
    var openBraces = []
    s = s.split('')
    
    for (let i = 0; i < s.length; i++){
        if(s[i] === '('){
            openBraces.push(s[i])
        } else if(openBraces.length === 0){
            return false
        } else {
            openBraces.pop();
        }
    }

    return openBraces.length !== 0 ? false : true;
}