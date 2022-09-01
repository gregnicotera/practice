/*
Given 	position - integer 
		roll - the number of spaces to move - move twice
		
Return final position integer

Examples:
move(3, 6) should equal 15
move(0, 4), should equal 8
move(2, 5), should equal 12

function move (position, roll) {
  //double roll and add to previous position
  position += 2 * roll
  // return the new position
  return position;
}

*/

function move (position, roll) {
  //double roll and add to previous position
  // return the new position
  return position += 2 * roll;
}

console.log(move(3, 6) + " should equal 15")
console.log(move(0, 4) + " should equal 8")
console.log(move(2, 5) + " should equal 12")