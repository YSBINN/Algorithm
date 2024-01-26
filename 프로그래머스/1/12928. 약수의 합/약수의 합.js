function solution(n) {
  let numbers = [];
  const array = new Array(n + 1).fill(0);
  array.forEach((_el, idx) => {
    if (n % idx === 0) numbers.push(idx);
  });
  return numbers.reduce((acc, v) => acc + v, 0);
}