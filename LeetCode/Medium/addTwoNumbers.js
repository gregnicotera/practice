
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

 
/**
 * given two numbers l1, l2 as LL in reverse order - non-empty, each node has 1 digit, 
 * return sum as LL, in reverse
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 
Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

 */
var addTwoNumbers = function(l1, l2) {
	// while loop to move through non-empty nodes
		//add each nodes val
		//store carry if needed
		//assign current val
		//set current, l1 and l2 to next
	let current = new ListNode();
	let result = current;
	let carry = 0;
	while(l1 || l2){
		current.val = l1.val + l2.val;
		if (current.val >= 10) {
			carry = 1;
			current.val -= 10;
		}else{
			carry = 0;
		} 
		
		if(l1){
			l1 = l1.next;
		}
		if(l2){
			l2 = l2.next;
		}
		
		current.next = new ListNode(carry);
		current = current.next;
	}
	if(carry){
		current.next = new ListNode(carry);
	}
	return result;
};