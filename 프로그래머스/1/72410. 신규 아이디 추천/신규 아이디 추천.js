function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");

  const length = new_id.length;
  return length <= 2 ? new_id + new_id.slice(-1).repeat(3 - length) : new_id;
}