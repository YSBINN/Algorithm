function solution(numbers,arr=[]) {
for(i=0;i<=9;i++){
    if(!numbers.includes(i))arr.push(i)
}
    return arr.reduce((acc,v)=>acc+v,0)
}