function calculateYears(principal, interest, tax, desired) {
  let years = 0;
    while(principal < desired){
      principal = principal * (1 + (interest * (1 - tax)));
      years++;
    }
  return years;
}