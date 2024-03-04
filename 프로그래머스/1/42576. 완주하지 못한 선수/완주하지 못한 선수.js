function solution(participant, completion) {
  const completionCounts = completion.reduce(
    (acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc),
    {}
  );
  return participant.find(pa => {
    if (completionCounts[pa]) completionCounts[pa] -= 1;
    else return true;
  });
}