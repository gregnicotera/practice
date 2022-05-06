function DNAStrand(dna){
  const PAIRS = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };
  return dna.split('').map(c => PAIRS[c]).join('');
}
