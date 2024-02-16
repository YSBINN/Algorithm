function solution(dartResult) {
  const state = { star: "*", oops: "#", Single: "S", Double: "D", Triple: "T" };
  let score = 0;
  let scores = [];
  for (let i = 0; i < dartResult.length; ++i) {
    if (!isNaN(dartResult[i])) {
      score = +dartResult[i - 1] === 1 ? 10 : +dartResult[i];
    } else {
      switch (dartResult[i]) {
        case state.Single:
          scores.push(score);
          break;
        case state.Double:
          scores.push(Math.pow(score, 2));
          break;
        case state.Triple:
          scores.push(Math.pow(score, 3));
          break;
        case state.star:
          if (0 <= scores.length - 2) {
            scores[scores.length - 2] *= 2;
          }
          scores[scores.length - 1] *= 2;
          break;
        case state.oops:
          scores[scores.length - 1] *= -1;
          break;
      }
    }
  }
  return scores.reduce((acc, cur) => (acc += cur));
}
