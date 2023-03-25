/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function (n, edges) {
  const graph = new Array(n).fill().map((_) => []);
  for (const [v1, v2] of edges) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  const counts = [];
  const visited = new Set([]);
  for (let i = 0; i < n; i++) {
    if (visited.has(i)) continue;
    visited.add(i);
    const count = dfs(i, graph, visited);
    counts.push(count);
  }

  let ans = 0;
  let sum = counts[0];
  for (let i = 1; i < counts.length; i++) {
    ans += sum * counts[i];
    sum += counts[i];
  }

  return ans;
};

function dfs(node, graph, visited) {
  let count = 1;
  for (const child of graph[node]) {
    if (visited.has(child)) continue;
    visited.add(child);
    count += dfs(child, graph, visited);
  }

  return count;
}