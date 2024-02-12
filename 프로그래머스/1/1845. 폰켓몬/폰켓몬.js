function solution(nums) {
const 선택수 = nums.length/2;
const numsSet = new Set(nums);
return 선택수 < numsSet.size ? 선택수 : numsSet.size;
}