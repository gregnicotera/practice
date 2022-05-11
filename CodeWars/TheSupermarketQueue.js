function queueTime(customers, n) {
  let tills = new Array(n).fill(0)
  for(let time of customers){
    let idx = tills.indexOf(Math.min(...tills))
    tills[idx] += time
  }
  return Math.max(...tills)
}