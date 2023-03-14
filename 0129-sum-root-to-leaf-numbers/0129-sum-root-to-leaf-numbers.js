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
 * @return {number}
 */
var sumNumbers = function(root) {
    let ans = [];
    dfs(root, '', ans);
    return ans.reduce((prev, cur)=>prev+cur);
};
var dfs = function(node, cur, ans) {
    if(!node) { return; }
    if(!node.left && !node.right) {
        ans.push(parseInt(cur + node.val));
    }
    dfs(node.left, cur + node.val, ans);
    dfs(node.right, cur + node.val, ans);
};