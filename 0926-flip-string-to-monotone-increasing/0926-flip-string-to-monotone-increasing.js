/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    const total = s.length
    let sum = 0
    for(let i=0;i<total;i++) if (s[i]==="1") sum++

    let ans = total-sum

    let left=0
    let right=sum
    for(let i=0;i<total;i++) {
        if (s[i]==="1") {
            left++
            right--
        }
        ans = Math.min(ans,left+((total-i-1)-right))
    }

    return ans
};