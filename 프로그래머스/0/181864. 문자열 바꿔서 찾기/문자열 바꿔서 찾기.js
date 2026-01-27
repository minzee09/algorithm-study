function solution(myString, pat) {
    myString = myString.replace(/A/g, "C");
    myString = myString.replace(/B/g, "A");
    myString = myString.replace(/C/g, "B");
    return myString.includes(pat) ? 1 : 0 ;
}