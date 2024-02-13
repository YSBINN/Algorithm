function solution(number, limit, power) {
  return Array.from({length:number},(_,i)=>findDivisors(i+1)>limit?power:findDivisors(i+1))
    .reduce((acc,cur)=>acc+cur)
}

function findDivisors(num) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            if (i === num / i) {
                count += 1;
            } else {
                count += 2; 
            }
        }
    }
    return count;
}

