// Params:
// names - array of names who liked the post

// Results:
// return a string that says how many people liked the tweet

// Examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Pseudocode:
// 1. Make a series of conditionals:
//   0 likes, 1-3 likes, 4 or more likes
// 2. Make a string for each case to return 


function likes(names) {
    if(names.length === 0){
      return 'no one likes this'
    }
    else if(names.length === 1){
      return `${names[0]} likes this`
    }
    else if (names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    }
    else if(names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else{
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  
}