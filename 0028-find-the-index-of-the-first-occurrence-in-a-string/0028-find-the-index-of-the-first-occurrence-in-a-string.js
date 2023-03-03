/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === "") {
    return 0;
  }

  if (!haystack || !needle) {
    return -1;
  }

  for (let i = 0; i < haystack.length; i++) {
    const temp = haystack.slice(i, i + needle.length);

    if (temp === needle) {
      return i;
    }
  }

  return -1;
};