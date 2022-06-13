function isInteresting(number, awesomePhrases) {
  var tests = [
		n => /^\d00+$/.test(n),
    function(n) { return /^(\d)\1+$/.test(n); },
    function(n) { return RegExp(n).test(1234567890); },
    function(n) { return RegExp(n).test(9876543210); },
    function(n) { return n + '' == (n + '').split('').reverse().join(''); },
    function(n) { return awesomePhrases.some(function(p) { return p == n; }); }
  ];
  
  var interesting = 0;
  tests.some(function(test) {
    if (number > 99 && test(number))
      return interesting = 2;
    else if ((number > 98 && test(number + 1)) || (number > 97 && test(number + 2)))
      interesting = 1;
  });
  return interesting;
}




/*
function isInteresting(number, awesomePhrases) {
  if(number === 98 || number === 99 ) return 1
  if(number >= 100){
    console.log(tests(number, awesomePhrases))
    if(tests(number, awesomePhrases)){
      console.log('wtf')
      return 2
    }  
    if(tests(number + 1, awesomePhrases) || tests(number + 2, awesomePhrases)){
      return 1
    }
  }
  
  return 0
}

function tests(n, s){
  const nArr = String(n).split('')
  const sorted = [...nArr].sort((a,b) => a - b)
  let check = []
  
  //digit then zeroes
  if(nArr.slice(1).every(e => e == 0)){
    console.log('digits then zeroes')
    return true
  }
  
  //same number
  if(nArr.every(e => e === nArr[0])){
    console.log('same number')
    return true
  }

  
  //incrementing and decrementing
  check = []
  for(let i = 1; i < nArr.length; i++){
    if(nArr[i] == (+nArr[i - 1] - 1)){
      check.push('decrementing')
    }
    if(nArr[i] == (+nArr[i - 1] + 1) || (nArr[i] == 0 && nArr[i - 1] == 9) ){
      check.push('incrementing')
    }
  }
  
  if(check.length  === nArr.length - 1 && check.every(e => e === 'decrementing')){
    check = []
    console.log('decrementing')
    return true
  }else if(check.length === nArr.length - 1 && check.every(e => e === 'incrementing')){
    console.log('incrementing')
    return true
  }else{
    check = []
  }
  
  //palindrome
  if(nArr.slice(0, nArr.length / 2).reverse().join('') == nArr.slice(-nArr.length / 2).join('')){
    console.log('palindrome')
    return true
  }
  
  //match awesome phrase list
  if(s.some(e => e === n)){
    console.log('match awesome')
    return true
  }
  return false
}
*/