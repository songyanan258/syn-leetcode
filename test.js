var rob = function (nums) {
  let len = nums.length
  if (len <= 0) {
    return 0
  }
  if (len == 1) {
    return nums[0]
  }
  if (len == 2) {
    return Math.max(nums[0], nums[1])
  }
  console.log('喵喵喵', nums.slice(0, len - 1), nums.slice(0, len - 2), Math.max(rob(nums.slice(0, len - 1)), rob(nums.slice(0, len - 2) + nums[len - 1])))
  return Math.max(rob(nums.slice(0, len - 1)), rob(nums.slice(0, len - 2)) + nums[len - 1])
};

console.log(rob([1, 2, 3, 4]))