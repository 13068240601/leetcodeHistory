/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let obj = {}
  let arr = s.split('')
  arr.map((item, i) => {
    if (!obj[item]) {
      obj[item] = { index: i, count: 1 }
    } else {
      let count = obj[item].count
      obj[item].count = ++count
    }
  })
  let arr2 = []
  for (key in obj) {
    if (obj[key].count === 1) {
      arr2.push(obj[key].index)
    }

  }
  if (arr2.length === 0) {
    return -1
  }
  return arr2[0]
};
// @lc code=end

