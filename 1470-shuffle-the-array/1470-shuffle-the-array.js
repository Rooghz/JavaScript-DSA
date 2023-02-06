/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let ans=[]
    for(let i=0,j=n;i<n&&j<nums.length ;i++,j++)
    {
    ans.push(nums[i])
    ans.push(nums[j])    

    }
    return ans
};