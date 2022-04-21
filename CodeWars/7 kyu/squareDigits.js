function squareDigits(num){
  return +String(num).split('').map(digit => digit * digit).join('');
}