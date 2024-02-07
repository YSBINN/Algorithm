function solution(food) {
const [water,...foodList] = food
    
const half = foodList.reduce((halfArrange,food,idx)=>{
        food%2===0? food=`${idx+1}`.repeat(food/2):food=`${idx+1}`.repeat((food-1)/2)
        return halfArrange + food
    },'')
    
return half + 0 + half.split('').reverse().join('')
}