/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const [n, ways] = [s.length, []];
    if (n < 4 || n > 12) {
        return ways;
    }
    const restore = (start, end, way) => {
        for (let i = start; i < Math.min(end, n); i++) {
            const segment = s.substring(start, i + 1);
            const num = parseInt(segment);
            if (num < 256 && `${num}` === segment) {
                way.push(segment);
                if (way.length === 4) {
                    if (i + 1 === n) {
                        ways.push(way.join("."));
                    }
                } else {
                    restore(i + 1, i + 4, way);
                }
                way.pop();
            }
        }
    }

    restore(0, 3, []);
    return ways;
};