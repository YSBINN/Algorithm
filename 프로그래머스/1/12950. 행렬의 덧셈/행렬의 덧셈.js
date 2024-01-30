function solution(a, b) {
return a.map((arr1, idx1) => arr1.map((val, idx2) => val+b[idx1][idx2]));

}