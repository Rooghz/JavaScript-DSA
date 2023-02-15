/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    const sum = BigInt(num.join("")) + BigInt(k);
    return sum.toString().split("");
};