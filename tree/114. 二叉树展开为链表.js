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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
   /*
    二叉树先序遍历放入一个数组中，然后改变root 的指向
   */
  const list = []

  if (!root) return []
  const dfs = (_root) => {
      if (!_root) return
      list.push(_root)
      dfs(_root.left)
      dfs(_root.right)
  }
  dfs(root)
  for (let i = 0; i < list.length; i++) {
      const node = list[i]
      node.left = null
      list[i+1] && (node.right = list[i+1])
  }
};