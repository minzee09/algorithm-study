function solution(sizes) {
    let sx = 0;
    let sy = 0;
    var answer = 0;
    sizes.map((s,idx) => {
        s.sort((a,b) => b-a);
        sx = sx < s[0] ? s[0] : sx;
        sy = sy < s[1] ? s[1] : sy;
    });
    answer = sx * sy;
    return answer;
}