function countPositivesSumNegatives(input) {
    return input && input.length > 0 ? [input.filter(e => e > 0).length,
                    input.filter(e => e < 0).reduce((a,b) => a + b, 0)]
                 : [] ;
}