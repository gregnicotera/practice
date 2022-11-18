/**
 * @param {number} x -signed 32 bit integer
 * @return {number} reversed number
 
 Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21

 */
var reverse = function(x) {
    //set limit for 32 bit
    const limit = 2147483648;
    //hold sign
    const k = x < 0 ? -1 : 1;
    //reverse number in string from and convert back to number
    const n = Number(String(Math.abs(x)).split(``).reverse().join(``));
    //return 0 if too big, otherwise return sign and reversed number
    return n > limit ? 0 : n * k;
};