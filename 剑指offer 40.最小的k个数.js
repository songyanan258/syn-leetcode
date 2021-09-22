/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  if (k == 0) return []
  let ans = []
  for (let i = 0; i < arr.length; i++) {
    if (i > k - 1 && arr[i] >= ans[0]) continue
    if (i > k - 1 && arr[i] < ans[0]) {
      ans.shift()
    }
    sortArr(ans, arr[i])
  }
  return ans
};

const sortArr = function (array, val) {
  array.push(val)
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] > array[i - 1]) {
      [array[i], array[i - 1]] = [array[i - 1], array[i]]
    }
  }
  return array
}