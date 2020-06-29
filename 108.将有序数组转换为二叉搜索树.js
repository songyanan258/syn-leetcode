/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // 处理边界条件
  if (!nums.length) {
    return null
  }

  // root 结点是递归“提”起数组的结果
  const root = buildBST(0, nums.length - 1)

  // 定义二叉树构建函数，入参是子序列的索引范围
  function buildBST(low, high) {
    // 当 low > high 时，意味着当前范围的数字已经被递归处理完全了
    if (low > high) {
      return null
    }
    const mid = Math.floor(low + (high - low) / 2)
    const cur = new TreeNode(nums[mid])
    cur.left = buildBST(low, mid - 1)
    cur.right = buildBST(mid + 1, high)
    // 返回当前结点
    return cur
  }
  // 返回根结点
  return root
};
// @lc code=end

