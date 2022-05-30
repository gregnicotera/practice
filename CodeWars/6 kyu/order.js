function order(words){
  return words === '' ? '' : 
    words.split(' ').sort((a,b) => a.match(/\d/) - b.match(/\d/)).join(' ')
}