function solution(s) {
  const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  return Number(numbers.reduce((acc, curr, i) => {
    while (acc.includes(curr)) {
      acc = acc.replace(curr, i);
    }
    return acc;
  }, s));
}