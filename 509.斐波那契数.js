/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0
  if (n < 3) {
    return 1
  } else {
    return fib(n - 2) + fib(n - 1)
  }
};
// @lc code=end

