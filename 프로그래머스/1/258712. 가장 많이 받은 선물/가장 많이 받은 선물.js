function solution(friends, gifts) {
  const len = friends.length;
  const nameMap = new Map(friends.map((name, idx) => [name, idx]));
  const giftTable = gifts.reduce(
    (acc, info) => {
      const [from, to] = info.split(" ");
      acc[nameMap.get(from)][nameMap.get(to)]++;
      return acc;
    },
    Array.from({ length: len }, () => Array(len).fill(0))
  );

  const rankInfo = giftTable.map(
    (row, i) =>
      row.reduce((acc, cur) => acc + cur, 0) -
      giftTable.reduce((acc, cur) => acc + cur[i], 0)
  );

  const nextMonth = Array.from({ length: len }, () => 0);

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (giftTable[i][j] > giftTable[j][i]) nextMonth[i]++;
      if (giftTable[i][j] < giftTable[j][i]) nextMonth[j]++;
      if (giftTable[i][j] === giftTable[j][i]) {
        if (rankInfo[i] > rankInfo[j]) nextMonth[i]++;
        if (rankInfo[i] < rankInfo[j]) nextMonth[j]++;
      }
    }
  }

  return Math.max(...nextMonth);
}