var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = Math.max(...piles);
    let ans = high
    while (low <= high) {
        const mid = low + Math.floor((high - low)/2);
        let hours = 0;
		
        for(let p of piles) {
            hours += Math.ceil(p/mid)
        }
        if(hours <= h) {
		
            ans = Math.min(mid, ans);
            high = mid - 1;
        }
        else  {
            low = mid + 1;     
        }           
    }
    return ans;
};