/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
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
var minCameraCover = function (root) {
  //三种状态 0:不可见 1:可见，没有摄像头 2:可见，有摄像头
  if (root == null) return 0
  let ans = 0;
  var dfs = function (root) {
    if (!root) return 1

    let l = dfs(root.left)
    let r = dfs(root.right)
    if (l == 0 || r == 0) {
      ans++
      return 2
    } else if (l == 2 || r == 2) {
      return 1
    }
    return 0
  }
  if (dfs(root) == 0) ans++

  return ans
};
// @lc code=end

