const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split("")
  .map(el => {
    if (65 <= el.charCodeAt() && el.charCodeAt() <= 90) return el.toLowerCase();
    return el.toUpperCase();
  })
  .join("");;
    console.log(str)
});