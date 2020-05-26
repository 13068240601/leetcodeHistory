/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = []
  for (k of s) {
    switch (k) {
      case '{':
      case '(':
      case '[':
        arr.push(k);
        break;
      case '}':
      case ')':
      case ']':
        if (k !== arr.pop()) return false;
        break;
    }
  }
  return true
};
// @lc code=end

