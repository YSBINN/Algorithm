function solution(s) {
const str = s;
let array = [];
let answer = new Array(str.length).fill(-1);
for (i = 0; i < str.length; i++) {
  if (array.includes(str[i])) {
    answer[i] = i - array.lastIndexOf(str[i]);
    array.push(s[i]);
    continue;
  }
  array.push(s[i]);
}
    return answer;
}