const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const meetingList = input
  .slice(1)
  .map(line => line.split(" ").map(Number))
  .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

const maxMeetings = meetingList.reduce(
  (acc, [start, end]) => {
    if (start >= acc.lastEndTime) {
      acc.count++;
      acc.lastEndTime = end;
    }
    return acc;
  },
  { count: 0, lastEndTime: 0 }
).count;

console.log(maxMeetings);