/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    const total = high - low + 1;

    return low % 2 === 1 ? Math.ceil(total / 2) : Math.floor(total / 2);
};