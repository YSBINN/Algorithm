function solution(x, y) {
  let hashX = Array.from({ length: 10 }, () => 0);
  let hashY = Array.from({ length: 10 }, () => 0);
  let answer = "";

  for (const num of x) {
    hashX[num * 1]++;
  }
  for (const num of y) {
    hashY[num * 1]++;
  }
  for (let i = 0; i < 10; i++) {
    if (hashX[i] && hashY[i]) {
      answer += String(i).repeat(Math.min(hashX[i], hashY[i]));
    }
  }
  if (answer !== "" && Number(answer) === 0) answer = "0";
  return answer.length ? [...answer].reverse().join("") : "-1";
}
