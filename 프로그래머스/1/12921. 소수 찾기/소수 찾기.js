function solution(n) {
    // 소수 여부를 저장할 배열 초기화 (true로 설정하여 모든 숫자를 초기에는 소수로 가정)
    let isPrime = Array(n + 1).fill(true);
    isPrime[0] = false; // 0은 소수가 아님
    isPrime[1] = false; // 1도 소수가 아님

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            // i의 배수를 모두 소수가 아닌 것으로 표시
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // 소수인 숫자들만 추출
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes.length;
}

