function solution(t, p) {
  return Array.from({ length: t.length - p.length + 1 }, (_, i) =>
    t.slice(i, p.length + i)
  ).filter(el => el <= p).length;
}