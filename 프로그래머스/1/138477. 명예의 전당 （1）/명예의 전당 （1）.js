function solution(k, scores) {
    return scores.map((_, i) => scores.slice(0, i + 1)
                    .sort((a, b) => b - a)
                    .slice(0, k)
                    .sort((a, b) => a - b)[0]
    );
}