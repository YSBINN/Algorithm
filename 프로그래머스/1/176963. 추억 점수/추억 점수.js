function solution(n, y, p) {
    let m = new Map()
    n.forEach((el,i)=>m.set(el,y[i]))
    const answer = p.map(el=>el.map(e=>m.get(e)).reduce((acc,cur)=>{
        if(!cur)cur=0
        return acc+cur
    },0))
    return answer
}