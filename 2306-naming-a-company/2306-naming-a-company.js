/**
 * @param {string[]} ideas
 * @return {number}
 */

var distinctNames = function(ideas) {
    const suffixes = new Map();
    for (const idea of ideas) {
        const first = idea[0];
        const suffix = idea.substring(1, idea.length);
        if (!suffixes.has(first)) {
            suffixes.set(first, new Set());
        }
        suffixes.get(first).add(suffix);
    }

    let res = 0;

    for (const [letterA, suffA] of suffixes) {
        for (const [letterB, suffB] of suffixes) {
            if (letterA === letterB) {
                continue;
            }

            let intersections = 0;
            for (const suff of suffA) {
                if (suffB.has(suff)) {
                    intersections += 1;
                }
            }

            const distinctA = suffA.size - intersections;
            const distinctB = suffB.size - intersections;

            res += (distinctA * distinctB);
        }
    }
        
    return res;
};