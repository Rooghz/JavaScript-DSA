/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
    for (let i = 1; i < words.length; i++) {
        if (a_gt_b(words[i - 1], words[i], order)) return false;
    }
    return true;
};

const a_gt_b = (a, b, order) => {
    const a_len = a.length;
    const b_len = b.length;

    for (let i = 0; i < Math.min(a_len, b_len); i++) {
        const a_idx = order.indexOf(a[i]);
        const b_idx = order.indexOf(b[i]);
        if (a_idx < b_idx) return false;
        else if (a_idx > b_idx) return true;
    }

    if (a_len > b_len) return true;
    else return false;
};