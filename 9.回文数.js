/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  // 字符串方式
  // const str = String(x).split('').reverse().join('')
  // return parseInt(str) === x
  const y = x
  let resX = 0
  while (x > 0) {
    resX = x % 10 + resX * 10
    x = Math.floor(x / 10)
  }
  return resX === y
};
// @lc code=end

