function solution(numbers,allSum=45) {
    return allSum - numbers.reduce((cur, acc) => cur + acc, 0);
}