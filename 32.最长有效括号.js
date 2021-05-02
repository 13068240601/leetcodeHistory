/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (!s) return 0;
  let len = 0,
    arr = [];
  arr.push(-1);
  for (let i = 0; i < s.length; i++) {
    let tem = s[i];
    if (tem === '(') {
      arr.push(i);
    } else {
      arr.pop();
      if (arr.length) {
        let curMaxLen = i - arr[arr.length - 1];
        len = Math.max(len, curMaxLen);
      } else {
        arr.push(i);
      }
    }
  }
  return len;
};
// @lc code=end
