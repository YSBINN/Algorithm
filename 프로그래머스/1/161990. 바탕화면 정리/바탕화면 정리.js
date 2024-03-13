const solution = wallpaper => {
  let lx = Number.MAX_SAFE_INTEGER;
  let ly = Number.MAX_SAFE_INTEGER;
  let rx = Number.MIN_SAFE_INTEGER;
  let ry = Number.MIN_SAFE_INTEGER;

  wallpaper
    .map(el =>
      el.split("").map(w => {
        if (w === "#") return 1;
        return 0;
      })
    )
    .forEach((x, idx) => {
      if (x.includes(1)) {
        lx = lx > idx ? idx : lx;
        rx = rx <= idx ? idx + 1 : rx;
        x.forEach((y, idy) => {
          if (y) {
            ly = ly > idy ? idy : ly;
            ry = ry <= idy ? idy + 1 : ry;
          }
        });
      }
    });

  return [lx, ly, rx, ry];
};