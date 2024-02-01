const NUM = 3;

const generateCombinations = (arr, num) => {
  if (num === 0) return [[]];
  if (arr.length < num) return [];

  const [first, ...rest] = arr;
  const withFirst = generateCombinations(rest, num - 1).map(comb => [first, ...comb]);
  const withoutFirst = generateCombinations(rest, num);

  return withFirst.concat(withoutFirst);
};

function solution(number) {
  const combinations = generateCombinations(number, NUM);
  const validCombinations = combinations.filter(comb => comb.reduce((a, b) => a + b, 0) === 0);
  
  return validCombinations.length;
}