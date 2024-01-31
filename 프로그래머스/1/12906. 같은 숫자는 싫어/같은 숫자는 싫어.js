function solution(arr) {
  return arr.reduce((prev, cur, i) => {
    if (i === 0 || cur !== arr[i - 1]) {
      prev.push(cur);
    }
    return prev;
  }, []);
}