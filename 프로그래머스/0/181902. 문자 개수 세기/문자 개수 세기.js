function solution(my_string) {
    const counts = new Array(52).fill(0);
    for (const char of my_string) {
        const code = char.charCodeAt(0);
        counts[code >= 97 ? code - 71 : code - 65]++;
    }
    return counts;
}
