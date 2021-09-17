/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  //思路：给每个节点标记一个position，存储最左边的position，
  //每遍历到一个节点将当前节点与同层的最左节点做差值，记录这个过程中的最大值
  //递归过程中，position向下传递左子树为2*position，右子树为2*position+1
  let ans = 1
  let obj = {}
  const dfs = function (root, level, position) {
    if (!root) return
    console.log(level, position)
    if (!obj[level]) {
      obj[level] = position
    } else {
      ans = Math.max(ans, position - obj[level] + 1)
    }
    //这里做个处理，防止数值太大溢出，减去父节点的position再+1
    position = position - obj[level] + 1
    dfs(root.left, level + 1, position * 2)
    dfs(root.right, level + 1, position * 2 + 1)

  }
  dfs(root, 1, 1)

  return ans

};
// @lc code=end

