/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let arr = [...new Set(nums)]
  if(arr.length<nums.length){
      return true
  }else{
      return false
  }
};
// @lc code=end

