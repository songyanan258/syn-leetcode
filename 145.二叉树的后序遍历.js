/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {

  let stack = []
  let ret = []
  let cur = root
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur)
      ret.push(cur.left)
      cur = cur.left
    }
  }
};
// @lc code=end

