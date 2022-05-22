/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
   /*
    主要逻辑就是 当前节点相同 左右子树都相同
    需要判断边界条件
    p节点 和 q节点 都不存在 证明相同 返回 tue
    p节点存在 但是 q节点不存在，q节点存在 p节点不存在，这两种情况都是不相等，直接返回 false
    p节点的值 和 q节点的值不相等 直接返回 false
    剩下的情况就是 p和q节点都有值且相等的情况，那么就递归比较它们的 左右子树
   */
  if ((p && !q) || (q && !p)) return false
  if (!p && !q) return true
  if (p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};