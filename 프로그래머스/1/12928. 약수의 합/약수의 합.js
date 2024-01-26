function solution(n) {
  let numbers = 0;
  const array = new Array(n + 1).fill(0);
  array.forEach((_el, idx) => {
    if (n % idx === 0) numbers += idx;
  });
  return numbers;
}
