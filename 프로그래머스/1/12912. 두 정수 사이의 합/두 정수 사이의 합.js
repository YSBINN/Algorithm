function solution(a, b, s = 0){
  for (i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}