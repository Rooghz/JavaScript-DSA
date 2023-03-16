/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const inorderMap = {};
    for (let i = 0; i < inorder.length; i++) {
        inorderMap[inorder[i]] = i;
    }
    
    let postorderIndex = postorder.length;
    
    function helper(left, right) {
        if (left > right) {
            return null;
        }
        
        const value = postorder[--postorderIndex];
        
        const root = new TreeNode(value);
        root.right = helper(inorderMap[value] + 1, right);
        root.left = helper(left, inorderMap[value] - 1);
    
        return root;
    }
    
    return helper(0, postorder.length - 1);
};