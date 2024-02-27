function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const matchCount = lottos.filter(lotto => win_nums.includes(lotto)).length;
  const zerosCount = lottos.filter(lotto => lotto === 0).length;
  return [rank[matchCount + zerosCount], rank[matchCount]];
}