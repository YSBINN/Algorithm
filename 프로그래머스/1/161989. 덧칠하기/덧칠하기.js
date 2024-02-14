function solution(n, m, section) {
    let count = 0;
    let paint = 0;
    section.forEach(el=>{
        if(el>paint){
            count++;
            paint = el+m-1;
        }
    })
    return count;
}