function solution(park, routes) {
  const W = park.length - 1;
  const H = park[0].length - 1;
  let [y, x] = [
    park.findIndex(el => el.includes("S")),
    park[park.findIndex(el => el.includes("S"))].indexOf("S"),
  ];

  routes.forEach(route => {
    const [dir, num] = route.split(" ");

    let [tempY, tempX] = [y, x];
    let flag = true;

    for (let i = 0; i < Number(num); i++) {
      if (dir === "E") tempX++;
      if (dir === "W") tempX--;
      if (dir === "S") tempY++;
      if (dir === "N") tempY--;

      if (
        tempY > W ||
        tempY < 0 ||
        tempX > H ||
        tempX < 0 ||
        park[tempY][tempX] === "X"
      ) {
        flag = false;
        break;
      }
    }

    if (flag) [y, x] = [tempY, tempX];
  });
  return [y, x];
}