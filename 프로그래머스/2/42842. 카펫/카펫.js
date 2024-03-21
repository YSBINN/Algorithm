function solution(brown, yellow) {
  for (let height = 3; height <= (brown + yellow) / height; height++) {
    if ((brown + yellow) % height === 0) {
      let width = (brown + yellow) / height;
      if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
}
