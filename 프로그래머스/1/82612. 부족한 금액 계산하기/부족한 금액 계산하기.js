function solution(price, money, count) {
const totalPrice = Array.from({length:count+1},(_,i)=>price*i).reduce((acc,v)=>acc+v)
return totalPrice <= money ? 0 : totalPrice - money
}