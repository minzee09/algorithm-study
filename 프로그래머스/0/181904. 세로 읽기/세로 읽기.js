function solution(my_string, m, c) {
    const result = [];
    
    for (let i = 0; i < my_string.length; i += m) {
        result.push(my_string[i + c - 1]);
    }

    return result.join('');
}