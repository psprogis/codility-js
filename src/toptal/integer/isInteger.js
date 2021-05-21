// Discuss possible ways to write a function isInteger(x)
// that determines if x is an integer.

/* eslint-disable no-unused-vars, no-bitwise */
function isInteger(x) {
    return (x ^ 0) === x;
}

// console.log(isInteger(10));
// console.log(isInteger(10.5));
// console.log(isInteger('abc'));

function isInteger2(x) {
    return (typeof x === 'number') && (x % 1 === 0);
}

function wrongSolution(x) { return parseInt(x, 10) === x; }

// console.log(String(1000000000000000000000));
// console.log(parseInt(1000000000000000000000, 10));
// console.log(parseInt(1000000000000000000000, 10) === 1000000000000000000000);
