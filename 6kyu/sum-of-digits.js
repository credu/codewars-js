/**
 * @param {Number} n 
 */
function digitalRoot(n) {
    n = n.toString();

    if (n.length === 1) {
        return parseInt(n);
    }

    const sum = n.split("").map(Number).reduce(( accumulator, currentValue ) => accumulator + currentValue);
    return digitalRoot(sum);
}
