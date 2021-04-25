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
var zigzagLevelOrder = function (root) {
  if (!root) return []

  let res = []
  //创建标志位，是否反转
  let flag = true
  //创建数组存放当前层级
  let arr = [root]
  while (arr.length) {
    let newArr = []
    let target = Object.assign([], arr)
    if (!flag) target.reverse()
    flag = !flag
    res.push(target.map(item => item.val))
    //循环遍历，压入下一层级
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].left) {
        newArr.push(arr[i].left)
      }
      if (arr[i].right) {
        newArr.push(arr[i].right)
      }
    }
    arr = newArr

  }
  return res
};
// @lc code= end
