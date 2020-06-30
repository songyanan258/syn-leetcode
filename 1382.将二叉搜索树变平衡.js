/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  //中序遍历数组
  const nums = []
  //中序遍历
  function inorder(root) {
    if (!root) {
      return
    }
    inorder(root.left)
    nums.push(root.val)
    inorder(root.right)
  }

  function buildAVL(low, high) {
    if (low > high) {
      return null
    }
    const mid = Math.floor(low + (high - low) / 2)
    const cur = new TreeNode(nums[mid])
    cur.left = buildAVL(low, mid - 1)
    cur.right = buildAVL(mid + 1, high)
    return cur
  }
  inorder(root)
  return buildAVL(0, nums.length - 1)
};
// @lc code=end

