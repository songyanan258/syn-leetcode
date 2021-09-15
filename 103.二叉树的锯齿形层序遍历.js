/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root, num = 0, ans = []) {
  if (!root) return []
  let data = ans[num]
  if (!data) {
    data = [root.val]
  } else {
    //根据二叉树深度来判断插入尾部还是插入头部
    if (num % 2 == 0) {
      data.unshift(root.val)
    } else {
      data.push(root.val)
    }
  }
  ans[num] = data
  zigzagLevelOrder(root.right, num + 1, ans)
  zigzagLevelOrder(root.left, num + 1, ans)

  return ans

};
// @lc code= end
