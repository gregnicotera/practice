function isValidWalk(walk) {
  let NS = 0, EW = 0;
  for(let i = 0; i < walk.length; i++){
    if(walk[i] === 'n'){
      NS++
    }
    else if(walk[i] === 's'){
      NS--
    }
    else if(walk[i] === 'e'){
      EW++
    }
    else if(walk[i] === 'w'){
      EW--
    }
  }
  
  
  return walk.length === 10 && NS === 0 && EW === 0
}