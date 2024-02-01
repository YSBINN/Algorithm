function solution(s) {
  return s
    .split(" ")
    .map(el =>
      el
        .split("")
        .map((el, i) =>
          (i + 1) % 2 === 0 ? el.toLowerCase() : el.toUpperCase()
        )
        .join("")
    )
    .join(" ");
}