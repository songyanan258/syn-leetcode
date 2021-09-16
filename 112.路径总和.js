/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
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
 * @param {number} targetSum
 * @return {boolean}
 */
//递归解决问题
var hasPathSum = function (root, targetSum) {
  if (!root) return false
  //每次向下递归的时候targetSum减去当前节点的值后再向下传递
  if (root.left == null && root.right == null) {
    //当targetSum等于最底层叶子节点的值的时候说明找到了该路径，否则返回false
    return targetSum == root.val
  }

  //targetSum减去当前节点的值
  targetSum -= root.val
  //左右子树有一个满足的就行
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
};
// @lc code=end

