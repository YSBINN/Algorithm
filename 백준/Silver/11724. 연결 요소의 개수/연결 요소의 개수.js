const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const visited = Array.from({ length: N + 1 }, () => false);

const edges = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  edges[u].push(v);
  edges[v].push(u);
}

const dfs = idx => {
  visited[idx] = true;

  for (let i = 0; i < edges[idx].length; i++) {
    const next = edges[idx][i];
    if (!visited[next]) {
      dfs(next);
    }
  }
};

let cnt = 0;
for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    cnt++;
  }
}

console.log(cnt);
