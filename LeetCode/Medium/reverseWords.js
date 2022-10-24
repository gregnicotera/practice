/**
 * @param {string} s
 * @return {string}
 
Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"

Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

 */
function reverseWords(s){
	//make string array
	//remove empty 'words'
	//reverse
	//add spaces to string
	return s.split(' ').filter(word => !!word).reverse().join(' ');
}