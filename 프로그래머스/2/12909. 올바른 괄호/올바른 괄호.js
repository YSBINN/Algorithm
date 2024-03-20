function solution(s) {
  const stack = [];
  for (const char of s) {
    if (char === "(") stack.push(char);
    else {
      if (stack[stack.length - 1] !== "(") return false;
      else stack.pop();
    }
  }
  return stack.length === 0;
}