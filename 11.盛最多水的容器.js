/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length === 2) {
    if (height[0] > height[1]) {
      return height[1];
    } else {
      return height[0];
    }
  }
  let left = 0,
    right = height.length - 1,
    max = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      let num = height[left] * (right - left);
      if (num > max) {
        max = num;
      }
      left++;
    } else {
      let num = height[right] * (right - left);
      if (num > max) {
        max = num;
      }
      right--;
    }
  }
  return max;
};
// @lc code=end
