/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function (roads, seats) {
  const adjList = Array.from({length: roads.length + 1}, ()=>[])
  for (const [from, to] of roads) {
    adjList[from].push(to);
    adjList[to].push(from);
  }
  let ans = 0;
  const dfs = (node, p) => {
    let here = 1;
    for (const ne of adjList[node]) {
      if (ne != p) {
        here += dfs(ne, node);
      }
    }
    if (p !== -1) {
      ans += Math.ceil(here / seats);
    } else {
      return ans;
    }
    return here;
  };
  return dfs(0, -1);
};
