/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let len1 = str1.length, len2 = str2.length; 
    let len = gcd(len1, len2);
    let subStr = str1.substring(0, len);

    for (let i = 0; i < len1; i += len) {
        let tSubStr = str1.substring(i, i + len);
        if (tSubStr !== subStr) return '';
    }

    for (let i = 0; i < len2; i += len) {
        let tSubStr = str2.substring(i, i + len);
        if (tSubStr !== subStr) return '';
    }
    
    return subStr;
};

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}