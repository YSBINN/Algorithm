function solution(nums) {
return findAllCombinations(nums).filter(e=>isPrime(e)).length
}

function findAllCombinations(arr) {
    const combinations = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                combinations.push([arr[i], arr[j], arr[k]]);
            }
        }
    }

    return combinations.map((e)=>e.reduce((acc,cur)=>acc+cur));
}
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return true;
}