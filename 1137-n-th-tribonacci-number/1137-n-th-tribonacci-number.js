/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = (n) =>{
    if(n <= 1) return n;     
    let prev = [1, 1, 0];
        
    for(let i = 3; i <= n; i++) {
        let curr = prev[0] + prev[1] + prev[2];
        prev[2] = prev[1];
        prev[1] = prev[0];
        prev[0] = curr;
    }
    return prev[0];
};