// 다시 풀어보기

function solution(n, wires) {
    let answer = Infinity;

    // 유니온 파인드의 find 함수 (경로 압축 적용)
    const find = (parent, i) => {
        if (parent[i] !== i) {
            parent[i] = find(parent, parent[i]);
        }
        return parent[i];
    };

    // 유니온 파인드의 union 함수 (랭크 사용)
    const union = (parent, rank, i, j) => {
        let rootI = find(parent, i);
        let rootJ = find(parent, j);
        if (rootI === rootJ) return;
        if (rank[rootI] > rank[rootJ]) {
            parent[rootJ] = rootI;
        } else if (rank[rootI] < rank[rootJ]) {
            parent[rootI] = rootJ;
        } else {
            parent[rootJ] = rootI;
            rank[rootI]++;
        }
    };

    // 모든 전선을 하나씩 제거해보며 두 네트워크의 송전탑 개수 차이를 구합니다.
    for (let i = 0; i < wires.length; i++) {
        // 유니온 파인드를 위한 parent, rank 배열 초기화 (1번부터 n번 사용)
        let parent = Array.from({ length: n + 1 }, (_, idx) => idx);
        let rank = Array(n + 1).fill(0);

        // wires[i] 전선만 제거하고, 나머지 전선들을 union 연산으로 연결 처리
        for (let j = 0; j < wires.length; j++) {
            if (j === i) continue;  // 현재 제거할 전선은 건너뜁니다.
            const [a, b] = wires[j];
            union(parent, rank, a, b);
        }
        
        // wires[i][0] 을 시작으로 연결된 컴포넌트에 몇 개의 송전탑이 포함되는지 세어봅니다.
        let componentCount = 0;
        let root = find(parent, wires[i][0]);
        for (let k = 1; k <= n; k++) {
            if (find(parent, k) === root) {
                componentCount++;
            }
        }
        
        // 다른 그룹의 송전탑 수는 전체에서 빼준 값입니다.
        let otherCount = n - componentCount;
        let diff = Math.abs(componentCount - otherCount);
        answer = Math.min(answer, diff);
    }
    
    return answer;
}
