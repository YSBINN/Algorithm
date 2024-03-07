function solution(ingredient) {
  let answer = 0;
  const stack = [];

  ingredient.forEach(food => {
    stack.push(food);

    if (stack.slice(-4).join("") == "1231") {
      stack.splice(-4);
      answer++;
    }
  });
  return answer;
}