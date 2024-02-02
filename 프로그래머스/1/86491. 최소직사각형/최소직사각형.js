function solution(sizes) {
const sortedSizes = sizes.map(el=>el.sort((a,b)=>a-b))
const [width,height] = sortedSizes.reduce(([maxW,maxH],[curW,curH])=>[Math.max(maxW,curW),Math.max(maxH,curH)],[0,0])
return width*height
}