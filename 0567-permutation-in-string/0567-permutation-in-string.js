/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s2.length < s1.length) return false;
    
    const map = new Map();
    
    for (const ch of s1) {
        map.set(ch, (map.get(ch)??0)+1)
    }
                
    let l = 0, r = 0, counter = s1.length;
    
    while (r<s2.length) {
        if (map.get(s2[r])>0) {
            counter--;
        }
        map.set(s2[r], (map.get(s2[r])??0)-1);
        r++;
                
        if (counter === 0) return true;
        
        while (r-l >= s1.length) {
            if (map.get(s2[l])>=0) {
                counter++;
            }
            map.set(s2[l], (map.get(s2[l])??0)+1);
            l++;
        }
    }
        
    return false;
};