function solution(k, m, score) {
score.sort((a, b) => b - a);
return Array.from({ length: Math.floor(score.length / m) }, (_, i) => score[m * (i + 1) - 1] * m)
    .reduce((acc, value) => acc + value, 0);
    
}


