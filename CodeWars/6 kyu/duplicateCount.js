/* 
  params
    String text only alphabets (both uppercase and lowercase) and numeric digits
  
  return
    int count of repeats

  examples
    "abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    "indivisibility" -> 1 # 'i' occurs six times
    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice

  pseudocode
       for each charachter, count repeats
       if larger than last counter, save count
       repeat
*/
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) 
          || []
         ).length;
}