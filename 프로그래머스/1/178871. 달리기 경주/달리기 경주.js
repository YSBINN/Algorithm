function solution(players, callings) {
  const pMap = {};

  players.forEach((name, index) => {
    pMap[name] = index;
  });

  callings.forEach(name => {
    const cur = pMap[name];
    const prev = players[cur - 1];

    [players[cur], players[cur - 1]] = [players[cur - 1], players[cur]];

    pMap[name]--;
    pMap[prev]++;
  });

  return players;
}