const detectCycle = (head) => {
    let node = head
 
    while (node){
        if(node.visited){
            delete node.visited
            return node 
        }else{
            node.visited = true
            node=node.next
        }
    }

  return null
    
};
