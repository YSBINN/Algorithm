function solution(s) {
  const answer = [0, 0];
  while (s.length > 1) {
    const tempL = s.replaceAll("0", "").length;
    answer[1] += s.length - tempL;
    s = tempL.toString(2);
    answer[0]++;
  }
  return answer;
}