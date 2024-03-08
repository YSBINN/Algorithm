function solution(survey, choices) {
  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let answer = "";
  for (let i = 0; i < choices.length; i++) {
    const [leftType, rightType] = survey[i].split("");
    const result = Math.abs(choices[i] - 4);
    if (choices[i] < 4) types[leftType] += result;
    if (choices[i] > 4) types[rightType] += result;
  }
  const type = Object.keys(types);
  for (let i = 0; i < type.length; i += 2) {
    const leftType = types[type[i]];
    const rightType = types[type[i + 1]];
    leftType >= rightType ? (answer += type[i]) : (answer += type[i + 1]);
  }

  return answer;
}