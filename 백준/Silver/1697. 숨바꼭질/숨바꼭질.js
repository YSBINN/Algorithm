const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const [startPosition, targetPosition] = fs.readFileSync(filePath, "utf8").split(" ").map(Number);

const visited = new Array(100001).fill(false);

function findShortestPath(start, target) {
  const queue = [[start, 0]];
  visited[start] = true;

  while (queue.length > 0) {
    const [currentPosition, currentTime] = queue.shift();
    
    if (currentPosition === target) {
      return currentTime;
    }

    [currentPosition - 1, currentPosition + 1, currentPosition * 2].forEach(nextPosition => {
      if (nextPosition >= 0 && nextPosition <= 100000 && !visited[nextPosition]) {
        visited[nextPosition] = true;
        queue.push([nextPosition, currentTime + 1]); 
      }
    });
  }
}

console.log(findShortestPath(startPosition, targetPosition));
