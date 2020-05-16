/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // let arr = arr1.filter(item=>{
  // 	if(arr2.indexOf(item)>-1){
  // 		arr2.splice(arr2.indexOf(item),1)
  // 		return item
  // 	}
  // });
  // return arr
  let arr = []
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]
  }
  for (let key of nums1) {
    temp = nums2.indexOf(key)
    if (temp > -1) {
      arr.push(key);
      nums2.splice(temp, 1)
    }
  }
  return arr
};
// @lc code=end

