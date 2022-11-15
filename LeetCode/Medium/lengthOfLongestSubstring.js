/**
 * @param {string} s - letters, digits, symbols, spaces
 * @return {number} - length of longest substring without repeating chars
 
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 
 
 */
function lengthOfLongestSubstring(s){
	//sliding window - optimized\
	let charStore = {};
	let result = 0;
	//loop through string where range of substring we test is [i,j] staring at j = 0 and incrementing by one
	for(let i = 0, j = 0; j < s.length; j++){
		//check to see if we've stored char at pos j yet, if so slide window along to start there
		if(charStore.hasOwnProperty(s.charAt(j))){
			i = Math.max(charStore[s.charAt(j)], i)
		}
		result = Math.max(result, j - i + 1);
		charStore[s.charAt(j)] = j + 1;
	}
	
	return result
}