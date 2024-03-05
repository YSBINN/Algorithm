const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString() * 1;

const result = (2 ** input + 1) ** 2;
console.log(result);