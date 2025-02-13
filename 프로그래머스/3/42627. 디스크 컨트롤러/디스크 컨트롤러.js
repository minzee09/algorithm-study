function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]); // 요청 시각 기준 정렬
    const pq = []; // 우선순위 큐 (소요시간 기준 정렬)
    let time = 0, index = 0, total = 0;

    while (index < jobs.length || pq.length > 0) {
        // 현재 시간(time)까지 도착한 작업을 우선순위 큐에 추가
        while (index < jobs.length && jobs[index][0] <= time) {
            pq.push(jobs[index]);
            pq.sort((a, b) => a[1] - b[1]); // 소요시간 기준 정렬
            index++;
        }

        if (pq.length > 0) {
            let [start, duration] = pq.shift(); // 소요시간이 가장 짧은 작업 선택
            time += duration;
            total += time - start;
        } else {
            time = jobs[index][0]; // 새로운 작업이 들어올 때까지 시간 이동
        }
    }

    return Math.floor(total / jobs.length);
}
