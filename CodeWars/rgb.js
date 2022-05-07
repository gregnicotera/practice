function rgb(r, g, b){
//   //convert to base 16
//   //assign 0-9 then A-F
  const RGB = [r, g, b]
  for(let i = 0; i < 3; i++){
    if(RGB[i] < 0){
        RGB[i] = 0
      }
    else if(RGB[i] > 255){
        RGB[i] = 255
    }
  }
  
  return RGB.reduce((acc, curr) => {
    if(curr < 16){
      acc += '0' + curr.toString(16).toUpperCase()
    }
    else{
      acc += curr.toString(16).toUpperCase()
    }
    return acc;
  },'')
}

//clever solution
// function rgb(r, g, b){
//   return toHex(r)+toHex(g)+toHex(b);
// }

// function toHex(d) {
//     if(d < 0 ) {return "00";}
//     if(d > 255 ) {return "FF";}
//     return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }
