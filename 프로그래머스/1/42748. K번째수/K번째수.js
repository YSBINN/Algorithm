function solution(array, commands) {
return commands.reduce((acc,cur)=>{
    const [start, end, position] = cur;
    acc.push(array.slice(start-1,end).sort((a,b)=>a-b)[position-1])
    return acc
},[])
}