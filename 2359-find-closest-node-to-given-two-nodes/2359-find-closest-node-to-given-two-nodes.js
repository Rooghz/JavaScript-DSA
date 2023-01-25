/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
function closestMeetingNode (edges, node1, node2) {
  const distances1 = getDistances(node1, edges),
        distances2 = getDistances(node2, edges)
  
  let minPath = Number.MAX_SAFE_INTEGER,
      target = -1
  for (let i = 0; i < edges.length; i++) {
    if (!distances1.has(i) || !distances2.has(i)) continue
    const localMinPath = Math.max(distances1.get(i), distances2.get(i))
    if (minPath <= localMinPath) continue
    minPath = localMinPath
    target = i
  }
  return target
}

function getDistances (index, edges) {
  const distances = new Map()
  let distance = 0
  while (!distances.has(index) && index !== -1) {
    distances.set(index, distance)
    distance++
    index = edges[index]
  }
  return distances
}