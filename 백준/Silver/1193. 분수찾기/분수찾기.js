const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = +require("fs").readFileSync(filePath).toString();

let rank = 1;
let block = 1;

while (block < input) {
  block += rank + 1;
  rank++;
}

const a = rank - (block - input);

console.log(rank % 2 === 0 ? `${a}/${rank - a + 1}` : `${rank - a + 1}/${a}`);