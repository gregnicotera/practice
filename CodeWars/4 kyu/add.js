// Parameters:
// a - first number
// b - second number

// Result:
// We want to return the sum of the two large numbers as a string

// Examples:
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

// Pseudocode:
// 1. store each number in an array
// 2. starting from the end, add digits from both arrays together
// 3. save carry and add to next digit
// 4. return String


function add(a, b) {
  let carry = 0, result = ''
  a = a.split('')
  b = b.split('')
  while(a.length || b. length || carry){
    carry += ~~a.pop() + ~~b.pop()
    result = carry % 10 + result
    carry = carry > 9
  }
  return result
}