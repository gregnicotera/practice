/*
Params: m volume of the building

Return: integer n such as n^3 + (n-1)^3 + ... + 1^3 = m OR -1

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1

Pseudocode:
1. make counter
2. loop while subtracting squares
  3. iterate counter
  4. stop loop when total volume is less than 0
5. return -1 if volumne is negative
6. return counter if volume is 0
*/

function findNb(m) {
  let n = 0
  
  while(m > 0){
    n++
    m = m - (n ** 3)
  }
  if(m < 0){
    return -1
  }
  if (m === 0){
    return n
  }
}
