var findKthPositive = function (arr, k) {
  let a = [];

  for (let i = 1; i <= arr.length + k; i++) {
    if (!arr.includes(i)) {
      a.push(i);
    }
  }

  return a[k - 1];
};