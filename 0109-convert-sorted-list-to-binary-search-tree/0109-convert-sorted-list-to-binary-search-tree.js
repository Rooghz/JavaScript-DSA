/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    const getTree = (node) => {
        if(!node) return null
        if(!node.next) return new TreeNode(node.val)
        let slow = node;
        let fast = node;
        let temp = node
        let prev = new TreeNode(0, node);
        while(fast && fast.next){
            prev =slow;
            fast = fast.next.next
            slow = slow.next
        }
        prev.next = null
        let root = new TreeNode(slow.val);
        root.left = getTree(temp)
        root.right = getTree(slow.next);
        return root
    }
    return getTree(head)
};