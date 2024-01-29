function solution(n) {
    let result = 0;
    n = Math.sqrt(n);
    result = Number.isInteger(n) ? Math.pow(n+1, 2) : -1;
    return result;
}