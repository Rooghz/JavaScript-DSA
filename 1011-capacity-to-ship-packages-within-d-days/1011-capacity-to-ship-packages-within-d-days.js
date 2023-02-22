/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((sum, weight) => sum+weight)
    while(left<right){
       let mid = Math.floor(left + (right - left) / 2);
        let current =0;
        let day = 1;
        for(const weight of weights) {
            current += weight
            if(current <= mid) continue;
            current = weight;
            day += 1;
            if (day > days) break;
        }
        if(day > days) left = mid + 1;
        else right = mid;
    }
    return right;
};