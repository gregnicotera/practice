
// params
//   String array friends 
  
// return
//   String array with names that are length of 4

// examples
//   friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

// pseudocode
//   use filter with condition of name length is 4
//   return result

function friend(friends){
  return friends.filter(n => n.length === 4)
}