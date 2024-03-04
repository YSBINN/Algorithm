const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const [num, divider] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

console.log(parseInt(num, Number(divider)));