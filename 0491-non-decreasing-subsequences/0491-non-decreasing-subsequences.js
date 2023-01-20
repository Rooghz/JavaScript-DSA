/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    let result = new Set();
    let sequence = [];
    function backtrack(index) {
        if (index === nums.length) {
            if (sequence.length >= 2) {
                result.add(JSON.stringify(sequence));
            }
            return;
        }

        if (!sequence.length ||
            sequence[sequence.length - 1]
            <= nums[index]) {
            sequence.push(nums[index]);
            backtrack(index + 1);
            sequence.pop();
        }
        backtrack(index + 1);
    }
    backtrack(0);
    return Array.from(result).map(JSON.parse);
};