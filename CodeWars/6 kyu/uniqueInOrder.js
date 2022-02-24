/*
@param iterable String or Array 

@return array with ascending order without duplicates

Examples:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

Pseudocode:
1. Make the iterable an array
2. sort() - defualt with no params will defualt to ascending
3. return it
*/

var uniqueInOrder = function(iterable){
      return [...iterable].filter((e,i) => 	 e !== iterable[i + 1])
}