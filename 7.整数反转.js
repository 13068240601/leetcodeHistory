/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
   let arr = []
   let str = x.toString()
   for (let i = str.length-1; i >= 0; i--) {
      if (str[i] !== '-') {
         arr.push(str[i])
      }
   }
   if (str[0] === '-') {
      arr.unshift('-')
   }
   num = parseInt(arr.join(''))
   if(num <= Math.pow(-2,31) || num >= Math.pow(2,31) - 1 ){
      return 0;
   }
   return num
};
// @lc code=end

