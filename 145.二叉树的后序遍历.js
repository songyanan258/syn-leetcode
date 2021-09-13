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

  /**
   * 利用栈来处理后续遍历
   */
  let s1 = []
  let s2 = []
  let ans = []
  s1.push(root)
  s2.push(0)
  while (s1.length) {
    let status = s2.pop()
    switch (status) {
      case 0: {//处理左子树
        s2.push(1)
        if (s1[s1.length - 1] && s1[s1.length - 1].left !== null) {
          s1.push(s1[s1.length - 1].left)
          s2.push(0)
        }
      } break;
      case 1: {//处理右子树
        s2.push(2)
        if (s1[s1.length - 1] && s1[s1.length - 1].right !== null) {
          s1.push(s1[s1.length - 1].right)
          s2.push(0)
        }
      } break;
      case 2: {//处理中间
        let data = s1.pop()
        data && ans.push(data.val)
      } break;
    }
  }
  return ans
};
// @lc code=end

