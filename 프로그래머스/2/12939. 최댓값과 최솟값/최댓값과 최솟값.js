const solution = s => {
  const max = Math.max(...s.split(" "));
  const min = Math.min(...s.split(" "));
  return Array.from({ length: 2 }, (_, i) => (i === 0 ? min : max)).join(" ");
};