function solution(nums) {
return findAllCombinations(nums).filter(e=>isDecimal(e)).length
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
function isDecimal (num){
    let count = 0;
        for(j=2;j<num;j++){
            if(num%j===0)count++
        }
    return count ? false:true
}