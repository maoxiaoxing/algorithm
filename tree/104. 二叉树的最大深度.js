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
var maxDepth = function(root) {
  // 递归查找
  if (!root) {
      return 0
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};




var maxDepth = function(root) {
  /*
    广度优先搜索
    一层层遍历
    一层为为一组 即左右子树为一组， len 为 1或 2 根或者只有一个子树为 1 ，两个子树为 2
    遍历完一层 count + 1 代表有一层 
  */
  let count = 0
  if (!root) return count
  const queue = [root]
  while (queue.length) {
      let len = queue.length
      while (len--) {
          const node = queue.shift()
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }
      count+=1
  }
  return count
};
