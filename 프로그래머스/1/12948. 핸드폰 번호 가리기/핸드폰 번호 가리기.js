function solution(phone_number) {
return phone_number.split('').map((el,i)=>i<phone_number.length-4 ? "*" : el).join('')
}