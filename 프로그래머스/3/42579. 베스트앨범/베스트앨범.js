function solution(genres, plays) {
    const genrePlayCount = {}; 
    const genreSongs = {};     

    // 1. 장르별로 총 재생 횟수와 곡 정보 저장
    genres.forEach((genre, index) => {
        const play = plays[index];

        if (genrePlayCount[genre]) {
            genrePlayCount[genre] += play;
        } else {
            genrePlayCount[genre] = play;
        }
        
        if (genreSongs[genre]) {
            genreSongs[genre].push({ index: index, play: play });
        } else {
            genreSongs[genre] = [{ index: index, play: play }];
        }
    });

    // 2. 장르를 총 재생 횟수 기준으로 정렬
    const sortedGenres = Object.keys(genrePlayCount).sort((a, b) => genrePlayCount[b] - genrePlayCount[a]);

    const answer = [];

    // 3. 각 장르별로 곡을 정렬하고 최대 2곡 선택
    sortedGenres.forEach(genre => {
        const songs = genreSongs[genre];

        // 곡을 재생 횟수 기준으로, 동일한 경우 고유 번호 기준으로 정렬
        songs.sort((a, b) => {
            if (b.play === a.play) {
                return a.index - b.index;
            }
            return b.play - a.play;
        });

        // 최대 2곡 선택
        answer.push(songs[0].index);
        if (songs[1]) {
            answer.push(songs[1].index);
        }
    });

    return answer;
}