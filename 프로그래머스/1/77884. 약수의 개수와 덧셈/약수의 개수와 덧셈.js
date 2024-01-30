function countDivisors(n) {
    let divisors = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors += (i * i === n) ? 1 : 2;
        }
    }
    return divisors;
}

function solution(left, right) {
    return Array.from({length: right - left + 1}, (_, i) => left + i)
                .map(n => (countDivisors(n) % 2 === 0) ? n : -n)
                .reduce((acc, val) => acc + val, 0);
}