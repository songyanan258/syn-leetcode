/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function (root, num = 0, ans = []) {
  //num记录当前二叉树深度
  if (!root) return []
  let data = ans[num]
  if (!data) {
    data = [root.val]
  } else {
    data.push(root.val)
  }
  ans[num] = data

  levelOrderBottom(root.left, num + 1, ans)
  levelOrderBottom(root.right, num + 1, ans)
  //最外层翻转一下ans
  return num == 0 ? ans.reverse() : ans
};
// @lc code=end

