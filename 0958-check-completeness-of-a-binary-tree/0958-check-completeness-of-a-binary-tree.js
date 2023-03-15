/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let queue = [root]
    while(queue[0] !== null){
        let current = queue.shift();
        if(current){
            queue.push(current.left);
            queue.push(current.right)
        }
    }
    return queue.filter(Boolean).length == 0;
};