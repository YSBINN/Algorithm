const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";

const [N, X] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const coords = X.split(" ").map(Number);
let result = new Object();
let answer = "";

const arr = Array.from(new Set(coords)).sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  result[arr[i]] = i;
}

for (const el of coords) {
  answer += result[el] + " ";
}

console.log(answer);
