/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const dfs = function (root, ans) {
  if (!root) return
  ans.push(root.val)
  let children = root.children
  for (let i = 0; i < children.length; i++) {
    dfs(children[i], ans)
  }

  return ans
}
var preorder = function (root) {
  let ans = []
  dfs(root, ans)
  return ans
};
// @lc code=end

