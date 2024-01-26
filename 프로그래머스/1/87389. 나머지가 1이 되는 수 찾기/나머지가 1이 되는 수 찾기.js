function solution(s) {
  for (let i = 1; i < s; i++) {
    if (s % i === 1) return i;
  }
}