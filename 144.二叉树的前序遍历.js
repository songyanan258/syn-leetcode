/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {

  // let ret = []
  // let stack = []
  // let cur = root
  // while (cur || stack.length > 0) {
  //   while (cur) {
  //     ret.push(cur.val)
  //     stack.push(cur)
  //     cur = cur.left
  //   }
  //   cur = stack.pop()
  //   cur = cur.right
  // }
  // return ret
  let stack = []
  let ret = []
  let cur = root
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur)
      ret.push(cur.val)
      cur = cur.left
    }
    cur = stack.pop()
    cur = cur.right
  }
  return ret
};
// @lc code=end

