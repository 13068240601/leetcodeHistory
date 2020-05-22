/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // let str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase().split('')
  // return str.join('')===str.reverse().join('')//字符串对比
  let str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  //双指针
  let len = str.length-1
  let n = 0, m = len
  while (n < len) {
    if (str[n]!==str[m]) {
      return false
    }
    n++;
    m--;
  }
  return true
};
// @lc code=end

