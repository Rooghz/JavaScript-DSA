var minReorder = function (n, connections) {
  const graph = new Array(n).fill().map((_) => []);

  for (const [parent, child] of connections) {
    graph[parent].push([child, 'forward']);
    graph[child].push([parent, 'backward']);
  }

  let ans = 0;
  const visited = new Set([0]);
  const queue = [0];
  while (queue.length > 0) {
    const node = queue.shift();
    for (const [next, direction] of graph[node]) {
      if (visited.has(next)) continue;

      if (direction === 'forward') ans++;
      visited.add(next);
      queue.push(next);
    }
  }

  return ans;
};
