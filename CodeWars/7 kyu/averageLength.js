/*
given array of strings, always larger than 1 element
return array of strings with length of each string as average, round

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

*/
function averageLength(strings) { 
	let avg = Math.round(strings.join(``).length / strings.length);
	return strings.map(string => string[0].repeat(avg));
}