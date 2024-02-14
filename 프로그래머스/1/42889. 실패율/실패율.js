function solution(N, stages) {
  return Array.from({ length: N }, (_, i) => {
    const stage = i + 1;
    return {
      stage,
      rate:
        stages.filter(s => s === stage).length /
        stages.filter(s => s >= stage).length,
    };
  })
    .sort((a, b) => b.rate - a.rate)
    .map(({ stage }) => stage);
}
