/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let n = nums.length;
  let oldMax = 0;
  let newMax = 0;
  let cnt = 0;

  for (let i = 0; i < n - 1; i++) {
    newMax = Math.max(nums[i] + i, newMax);

    if (i === oldMax) {
      cnt++;
      oldMax = newMax;
    }
  }
  return cnt;
};