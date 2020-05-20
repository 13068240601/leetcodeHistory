/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0, len = prices.length;
  for (let i = 0; i < len - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      max += prices[i + 1] - prices[i]
      // i++
    }
  }
  return max
};
// @lc code=end

