function solution(myString, pat) {
    myString = myString.split('');
    for(let i in myString){
        if (myString[i] === 'A') myString[i] = 'B';
        else myString[i] = 'A'
    }
    myString = myString.join('')
    return myString.includes(pat) ? 1 : 0;
}