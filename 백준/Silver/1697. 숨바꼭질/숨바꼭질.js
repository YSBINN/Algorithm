const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const [startPosition, targetPosition] = fs.readFileSync(filePath, "utf8").split(" ").map(Number);

// 방문 여부를 추적하는 배열 초기화
const visited = new Array(100001).fill(false);

// 너비 우선 탐색(BFS) 함수 정의
function findShortestPath(start, target) {
  const queue = [[start, 0]]; // 위치와 시간을 함께 저장
  visited[start] = true;

  while (queue.length > 0) {
    const [currentPosition, currentTime] = queue.shift();
    
    // 목표 위치에 도달한 경우 현재 시간 반환
    if (currentPosition === target) {
      return currentTime;
    }

    // 다음으로 이동할 수 있는 위치들을 순회
    [currentPosition - 1, currentPosition + 1, currentPosition * 2].forEach(nextPosition => {
      // 다음 위치가 유효한 범위 내에 있고 아직 방문하지 않았다면
      if (nextPosition >= 0 && nextPosition <= 100000 && !visited[nextPosition]) {
        visited[nextPosition] = true; // 방문 처리
        queue.push([nextPosition, currentTime + 1]); // 큐에 추가
      }
    });
  }
}

// 결과 출력
console.log(findShortestPath(startPosition, targetPosition));