function solution(numbers) {
  
    const Sums = numbers.reduce((acc, cur, i) => 
        acc.concat(numbers.slice(i + 1).map(number => cur + number)), []);

    return [...new Set(Sums)].sort((a, b) => a - b);
}