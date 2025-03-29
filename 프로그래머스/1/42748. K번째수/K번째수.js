// 1. 결과를 저장할 배열 answer를 초기화
// 2. commands 배열을 순회하면서 각 명령(command)에 대해 다음 작업을 수행
//    a. command의 첫 번째 요소를 i, 두 번째 요소를 j, 세 번째 요소를 k라고 합니다.
//    b. array에서 인덱스 i-1부터 j까지 (slice 사용 시 j는 제외되므로 j로 지정) 부분 배열을 추출합니다.
//    c. 추출한 배열을 오름차순으로 정렬합니다.
//    d. 정렬된 배열에서 k번째 요소 (인덱스 k-1)를 결과 배열 answer에 추가합니다.
// 3. 모든 command를 처리한 후 answer 배열을 반환합니다.

function solution(array, commands) {
    var answer = [];
    
    // commands 배열 순회
    for (var idx = 0; idx < commands.length; idx++) {
        var command = commands[idx];
        var i = command[0];
        var j = command[1];
        var k = command[2];
        
        // 배열 자르기: slice의 시작 인덱스는 i-1, 끝 인덱스는 j (slice는 j번째 요소를 포함하지 않음)
        var sliced = array.slice(i - 1, j);
        
        // 오름차순 정렬 (숫자 정렬 시 compare 함수를 사용)
        sliced.sort(function(a, b) {
            return a - b;
        });
        
        // k번째 숫자 (인덱스 k-1) 추출 후 결과 배열에 추가
        answer.push(sliced[k - 1]);
    }
    
    return answer;
}
