function solution(s){
const a = s.split("").filter(el=>el==='y'||el==='Y').length;
const b = s.split("").filter(el=>el==='p'||el==='P').length;
    return a===b ? true :false

}