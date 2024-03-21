function solution(brown, yellow) {
  const total = brown + yellow;
  const divisors = new Map();
  for (let i = 3; i <= Math.sqrt(total); i++) {
    if (total % i === 0) {
      divisors.set(total / i, i);
    }
  }
  return Array.from(divisors).filter(el => {
    const [width, height] = el;
    return (width - 2) * (height - 2) === yellow;
  })[0];
}