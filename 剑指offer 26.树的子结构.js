/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A || !B) return false
  if (A.val == B.val && is_match(A, B)) return true
  //左右子树只要有一个满足就返回true
  return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

const is_match = function (A, B) {
  //B树先遍历完说明存在该子树
  if (B == null) return true
  //B树未遍历完，A树遍历完，说明不存在
  if (A == null) return false
  //比较值
  if (A.val !== B.val) return false
  //左右子树都满足才返回true
  return is_match(A.left, B.left) && is_match(A.right, B.right)
}