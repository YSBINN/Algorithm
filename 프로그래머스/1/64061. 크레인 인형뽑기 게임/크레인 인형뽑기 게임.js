function solution(board, moves) {
  const stack = [];
  let result = 0;
  moves.forEach(move => {
    for (let i = 0; i < board.length; i++) {
      const temp = board[i][move - 1];
      if (temp) {
        board[i][move - 1] = 0;
        if (stack[stack.length - 1] === temp) {
          stack.pop();
          result += 2;
        } else stack.push(temp);
        break;
      }
    }
  });
  return result;
}