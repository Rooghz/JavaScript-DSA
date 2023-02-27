/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
const construct = function (grid) {
    const build_tree = (x, y, length) => {
        if (length === 1) {
            return new Node(grid[x][y], true);
        }
        const half_length = (length / 2) >> 0;
        const topLeft = build_tree(x, y, half_length, half_length);
        const topRight = build_tree(x, y + half_length, half_length);
        const bottomLeft = build_tree(x + half_length, y, half_length);
        const bottomRight = build_tree(x + half_length, y + half_length, half_length);
        if (topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf &&
            topLeft.val == topRight.val && topRight.val == bottomLeft.val && bottomLeft.val == bottomRight.val) {
            return new Node(topLeft.val, true);
        }
        return new Node(grid[x][y], false, topLeft, topRight, bottomLeft, bottomRight);
    };
    return build_tree(0, 0, grid.length);
};