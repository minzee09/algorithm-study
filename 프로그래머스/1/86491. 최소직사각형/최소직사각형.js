// 1) 배열 [큰수, 작은수]로 정렬 되도록 함
// 2) 0번째에서 가장 큰 수와 1번째에 가장 큰 수 가져와서 둘이 곱함

function solution(sizes) {
    let n1 = 0;
    let n2 = 0;
    
    for(let i = 0; i < sizes.length; i++){
        sizes[i].sort((a,b) => b-a);
        if(n1 < sizes[i][0]){
            n1 = sizes[i][0];
        }
        if(n2 < sizes[i][1]){
            n2 = sizes[i][1];
        }
    }
    var answer = n1 * n2;
    return answer;
}