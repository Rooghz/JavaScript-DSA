/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    const BLUE = 'blue', RED = 'red', MAX = Number.MAX_SAFE_INTEGER;
  let queue = [[0, BLUE], [0, RED]], ans = Array(n).fill(MAX), visited = new Set(), steps = 0;
  
  while(queue.length > 0) {
      let len = queue.length;        
      for(let i = 0; i < len; i++) {
          let [node, color] = queue.shift();
          //console.log(node, color);
          ans[node] = Math.min(ans[node], steps);
          if(color === BLUE) {
              let edges = redEdges.filter(e => e[0] === node);
              for(let edge of edges) {
                  let next = edge[1];
                  if(!visited.has(edge)) {
                      visited.add(edge);                           
                      queue.push([next, RED]);
                  }
              }
          }
          
          if(color === RED) {
              let edges = blueEdges.filter(e => e[0] === node);
              for(let edge of edges) {
                  let next = edge[1];
                  if(!visited.has(edge)) {
                      visited.add(edge); 
                      queue.push([next, BLUE]);
                  }
              }
          }
      }
      steps++;
  }
  
  return ans.map(v => v=== MAX ? -1 : v);
};