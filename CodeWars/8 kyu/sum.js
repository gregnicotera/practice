/*
* params
* numbers array of numbers
* 
* return sum of all numbers
*
* examples:
* Input: [1, 5.2, 4, 0, -1]
* Output: 9.2
* 
* Input: []
* Output: 0
* 
* Input: [-2.398]
* Output: -2.398
* 
* pseudocode:
* 1. add all of the numbers
* 2. return it
*/
function sum (numbers) {
    return numbers.reduce((a,b) => a + b, 0)
};