function calculateDistance(pos1, pos2) {
  return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}

function solution(numbers, hand) {
  let leftHandPosition = "*";
  let rightHandPosition = "#";
  const KEYPAD = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    "*": [3, 0], 0: [3, 1], "#": [3, 2],
  };

  return numbers.map(number => {
    if (number % 3 === 1) {
      leftHandPosition = number;
      return "L";
    }
    if (number % 3 === 0 && number !== 0) {
      rightHandPosition = number;
      return "R";
    }

    const lDistance = calculateDistance(KEYPAD[number], KEYPAD[leftHandPosition]);
    const rDistance = calculateDistance(KEYPAD[number], KEYPAD[rightHandPosition]);

    if (lDistance > rDistance) {
      rightHandPosition = number;
      return "R";
    }
    if (lDistance < rDistance) {
      leftHandPosition = number;
      return "L";
    }

    if (hand === "left") {
      leftHandPosition = number;
      return "L";
    } else {
      rightHandPosition = number;
      return "R";
    }
  }).join("");
}