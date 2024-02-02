function solution(sizes) {
const sortedSizes = sizes.map(el=>el.sort((a,b)=>a-b))
const width = Math.max(...sortedSizes.map(el=>el[0]))
const height =Math.max(...sortedSizes.map(el=>el[1]))
return width*height
}