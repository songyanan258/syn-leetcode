/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  //结果数组
  const res = []
  //处理边界条件
  if (!root) {
    return res
  }
  //初始化队列
  const queue = []
  //根节点
  queue.push(root)
  //循环遍历
  while (queue.length) {
    //存储当前的节点
    const level = []
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const top = queue.shift()
      level.push(top.val)
      if (top.left) {
        queue.push(top.left)
      }
      if (top.right) {
        queue.push(top.right)
      }
    }
    res.push(level)
  }
  //返回结果数组
  return res
};
// @lc code=end

