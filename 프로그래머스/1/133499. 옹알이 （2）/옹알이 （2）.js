function solution(babbling) {
  const patterns = ['aya', 'ye', 'woo', 'ma'];

  return babbling.filter(babble => {
      for (let pattern of patterns) {
          if (babble.includes(pattern.repeat(2))) {
              return false;
          }
      }

      let modifiedBabble = patterns.reduce((acc, pattern) => {
          return acc.split(pattern).join(" ");
      }, babble).trim();
      return modifiedBabble.split(" ").join("").length === 0;
  }).length;
}