/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let i = nums.indexOf(target)
    if ( i > -1) {
        return i
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
            if (i === 0) {
                nums.unshift(target)  
                return 0
            }
            nums.splice(i - 1, 0, target)
            return i
        }
    }
    nums.push(target)
    return nums.length-1
};
// @lc code=end

