/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = ''
  if (strs.length === 0) {
    return res
  }
  if (strs.length === 1) {
    return strs[0]
  }
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] === '' || typeof (strs[i]) !== 'string') {
      return res
    }
  }
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return res
      }
    }
    res += strs[0][i]
  }
  return res
};
// @lc code=end

