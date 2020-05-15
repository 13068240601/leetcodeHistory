/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let i,len = nums.length,j
    for(i=0;i<len;i++){
        let num = target-nums[i]
        if(nums.indexOf(num)!==-1&&nums.indexOf(num)!==i){ 
            return [i,nums.indexOf(num)]
        }
    }
};
// @lc code=end

