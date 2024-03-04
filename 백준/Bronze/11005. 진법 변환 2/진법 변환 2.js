const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const [num, divider] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(num.toString(divider).toUpperCase());