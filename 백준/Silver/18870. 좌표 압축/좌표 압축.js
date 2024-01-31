const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";

const [N, X] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const coords = X.split(" ").map(Number);
let result = new Object();
let answer = "";

Array.from(new Set(coords))
  .sort((a, b) => a - b)
  .forEach((el, i) => (result[el] = i));

for (const el of coords) {
  answer += result[el] + " ";
}

console.log(answer);

