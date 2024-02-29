function solution(keymap, targets) {
  const map = new Map();
  const answer = [];

  keymap.forEach(keymapNum => {
    for (let j = 0; j < keymapNum.length; j++) {
      if (!map.has(keymapNum[j]) || j < map.get(keymapNum[j])) {
        map.set(keymapNum[j], j + 1);
      }
    }
  });

  targets.forEach(target => {
    let result = 0;
    for (let char of target) {
      if (!map.has(char)) {
        result = -1;
        break;
      } else {
        result += map.get(char);
      }
    }
    answer.push(result);
  });

  return answer;
}