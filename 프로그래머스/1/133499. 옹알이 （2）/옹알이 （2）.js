const solution = babbling => {
  const patternList = ["aya", "ye", "woo", "ma"];
  return babbling.filter(babble => {
    let str = babble;
    for (const pattern of patternList) {
      if (babble.includes(pattern.repeat(2))) return false;
      str = str.split(pattern).join(" ").trim();
      console.log(str);
      if (str.length === 0) return true;
    }
  }).length;
};