function solution(a, b) {
 return a.map((el,i)=>a[i]*b[i]).reduce((acc,v)=>acc+v,0)
}