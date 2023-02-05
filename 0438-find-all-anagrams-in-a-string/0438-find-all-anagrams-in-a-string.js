/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const S = new Map();
    const P = new Map();
    for (let ch of p) {
        P.set(ch, 1 + (P.get(ch) || 0));
    }
    const result = [];
    const n = p.length;
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        S.set(ch, (S.get(ch) || 0) + 1);
        if (i >= n) {
            if (S.get(s[i-n]) == 1) {
                S.delete(s[i-n]);
            } else {
                S.set(s[i-n], S.get(s[i-n]) - 1);
            }
        }
        if (areMapsEqual(P, S)) {
            result.push(i-n+1);
        }
    }
    return result;
};

function areMapsEqual(m1, m2) {
    if (m1.size !== m2.size) return false;
    for (let key of m1.keys()) {
        if (!m2.has(key) || m2.get(key) !== m1.get(key)) return false;
    }
    return true;
}