const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const [N, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const coinValues = [25, 10, 5, 1];
const answers = input.map(coin =>
  coinValues.map(value => {
    let count = Math.floor(coin / value);
    coin %= value;
    return count;
  })
);

answers.forEach(answer => console.log(answer.join(" ")));