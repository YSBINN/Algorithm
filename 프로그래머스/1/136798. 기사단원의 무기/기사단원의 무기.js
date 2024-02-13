const findDivisors= (num) => Array.from({length: Math.floor(Math.sqrt(num))}, (_, i) => i + 1)
         .reduce((acc, i) => 
             num % i === 0 ? 
             acc + (i === num / i ? 1 : 2) 
             : acc, 0);

function solution(number, limit, power) {
  return Array.from({length:number},(_,i)=>findDivisors(i+1)>limit?power:findDivisors(i+1))
    .reduce((acc,cur)=>acc+cur)
}

