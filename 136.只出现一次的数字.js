/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort()
  let i=0,len=nums.length
  for(;i<len;i++){
    if(nums[i]===nums[i+1]){
      i++
    }else{
    return nums[i]
    }
  }
};
// @lc code=end

