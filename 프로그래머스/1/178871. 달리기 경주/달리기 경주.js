function solution(players, callings) {
  const pMap = new Map();

  players.forEach((name, index) => {
    pMap.set(name, index);
  });

  callings.forEach(name => {
    const cur = pMap.get(name);
    const prev = players[cur - 1];

    [players[cur], players[cur - 1]] = [players[cur - 1], players[cur]];

    pMap.set(name, pMap.get(name) - 1);
    pMap.set(prev, pMap.get(name) + 1);
  });

  return players;
}