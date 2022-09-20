//given s - string of letters
//return - string of letters w/ first letter Capitalized, subsequent letters lowercase, 
//            length of each section is the same as the position of the letter in s
function accum(s) {
	return s.split(``).map((char,i) => {
    if(i === 0){
      return char.toUpperCase();
    }
    else{
      return char.toUpperCase() + char.toLowerCase().repeat(i);
    }
  }).join('-');
}