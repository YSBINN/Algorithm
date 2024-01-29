function solution(x) {
return x % x.toString().split('').map(el=>Number(el)).reduce((a,v)=>a+v) === 0 ? true : false;
}