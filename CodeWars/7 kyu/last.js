// given x - string
// return array of words sorted alphabetically by last letter, 
//      tie breaker is order in the string 

//'man i need a taxi up to ubud' -> 
//    ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
//'what time are we climbing up the volcano' -> 
//    ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
//'take me to semynak' ->
//    ['take', 'me', 'semynak', 'to']


function last(x){
  //turn sting into array of words
  let words = x.split(' ')
  //sort the array with sort() - 
  words.sort((a,b) => {
    let prevLength = a.length;
    let nextLength = b.length;
    let prevLastLetter = a.charAt(prevLength - 1)
    let nextLastLetter = b.charAt(nextLength - 1)
    if(prevLastLetter < nextLastLetter){
      return -1;
    }else if(prevLastLetter < nextLastLetter){
      return 1;
    }else {
      return 0
    }
  })
  return words;
  //return sorted array
}


console.log(last('man i need a taxi up to ubud') + " expected to equal ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']" )
console.log(last('what time are we climbing up the volcano') + " expected to equal ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']" )
console.log(last('take me to semynak') + " expected to equal ['take', 'me', 'semynak', 'to']" )