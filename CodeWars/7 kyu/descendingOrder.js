/*
  @param n given number to rearrange digits of
  
  @return highest number possible with digits of number n given
  
  examples: 

    Input: 42145 Output: 54421

    Input: 145263 Output: 654321

    Input: 123456789 Output: 987654321
  
  pseudocode:
    1. convert number n to an array
    2. sort array by largest digit
    3. convert array back to number
  
*/

function descendingOrder(n){
  return +n.toString().split('').sort().reverse().join('')
}