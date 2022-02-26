/*
param message string 
return encoded string
exmaple:  'test' -> 'grfg'
          'Test' -> 'Grfg'
          'Codewars' -> 'Pbqrjnef'
          'Ruby is cool!' -> 'Ehol vf pbby!'
          '10+2 is twelve.' -> '10+2 vf gjryir.'
          'abcdefghijklmnopqrstuvwxyz' -> 'nopqrstuvwxyzabcdefghijklm'
          'tc8zg' -> 'gp8mt'
pseudocode: 
- transform input string to array
- replace characters with the one 13 numbers later on in the alphabet, 
    after z, start at a again, leave other characters as they are
- transform array back to string
*/

function rot13(message){
  return message.split('').map(check).join('')
}

function check(e){
  if(e.match(/[a-mA-M]/g)){
    return String.fromCharCode(e.charCodeAt() + 13)
  }else if(e.match(/[n-zN-Z]/g)){
    return String.fromCharCode(e.charCodeAt() - 13)
  }else{
    return e
  }
}