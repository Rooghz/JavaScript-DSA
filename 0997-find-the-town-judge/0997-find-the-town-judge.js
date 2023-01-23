/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (!trust.length && n === 1) return n

    let maxTrustFreq = -Infinity, trustFreq = new Map()
    
    for (const [truster, trustee] of trust) {
       if (!trustFreq.has(trustee)) {
           trustFreq.set(trustee, 1)
       } else {
           trustFreq.set(trustee, trustFreq.get(trustee) + 1) 
       }
        
       const freq = trustFreq.get(trustee)
       if (freq > maxTrustFreq) {
           maxTrustFreq = freq
       }
    }
    
    const trustBank = new Map(trust)
    for (let i = 1; i <= n; i++) {
        if (!trustBank.has(i) && maxTrustFreq === n - 1) return i
    }
    
    return -1
};