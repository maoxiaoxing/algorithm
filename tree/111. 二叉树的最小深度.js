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
 var minDepth = function(root) {
  const dfs = (_root) => {
    if (!_root) return 0
    if (!_root.left && !_root.right) return 1 
    if (!_root.left) return dfs(_root.right) +1
    if (!_root.right) return dfs(_root.left) +1
    return Math.min(dfs(_root.right), dfs(_root.left)) +1
  }
  return dfs(root)
};