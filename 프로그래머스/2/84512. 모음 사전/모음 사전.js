function solution(word) {
    let answer = 0;
    let count = 0;
    const vowels = ['A','E','I','O','U'];
    
    function dfs(current){
        if (current.length > 5) return;
        
        if (current !== ''){
            count++;
            if (current === word){
                answer = count;
                return;
            }
        }
        
        for (let i = 0; i < vowels.length; i++){
            if(answer) return;
            dfs(current+vowels[i]);
        }
    }
    
    dfs('');
    return count;
}