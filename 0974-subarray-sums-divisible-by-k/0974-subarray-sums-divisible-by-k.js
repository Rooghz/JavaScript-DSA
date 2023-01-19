/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  const seen = { 0: 1 };
  let sum = 0;
  let ans = 0;

  for (const num of nums) {
    sum = (sum + num) % k;
    if (sum < 0) sum += k;
    if (sum in seen) {
      ans += seen[sum];
    }
    seen[sum] = (seen[sum] || 0) + 1;
  }

  return ans;
};
