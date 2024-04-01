function solution(n, words) {
  const set = new Set();

  set.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const lastWord = words[i - 1].slice(-1);

    if (lastWord !== word[0] || set.has(word)) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }

    set.add(word);
  }

  return [0, 0];
}