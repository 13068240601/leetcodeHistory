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
  if (s.length % 2 !== 0) return false
  let arr = []
  let obj = {
    ']': '[',
    '}': '{',
    ')': '(',
  }
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
        if (obj[k] !== arr.pop()) return false;
        break;
    }
  }
  if(arr.length>0) return false
  return true
};
// @lc code=end

