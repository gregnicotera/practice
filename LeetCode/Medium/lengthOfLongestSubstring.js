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
    //two pointer
	//loop through all substrings
		//check each char start pos to all end pos
		//start with 0 and save longer substrings w/ no repeats
	let sub = '';
	let biggest = 0;
	for(let i = 0; i < s.length; i++){
		for(let j = 1; j < s.length; j++){
			sub = s.substring(i,j);
			if(sub.length > biggest && !sub.match(/.+/)){
				biggest = sub.length;
			}
		}
	}
}