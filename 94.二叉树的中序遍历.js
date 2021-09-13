/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  //用栈来解决
  let stack = []
  let current = root
  let ans = []
  while (current || stack.length) {
    if (current) {//先深度遍历，将左节点入栈
      stack.push(current)
      current = current.left
    } else {
      //向上依次遍历，记录结果
      current = stack.pop()
      ans.push(current.val)
      //线上查找右边节点
      current = current.right
    }
  }
  return ans
};
// @lc code=end

