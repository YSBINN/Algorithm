const solution = (n,a,b) =>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).split('').map(el=>el>0?'#':" ").join(''))
