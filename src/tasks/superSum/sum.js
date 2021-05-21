function sum(n) {
    let accumulatedValue = n;

    function f(n2 = 0) {
        accumulatedValue += n2;

        return f;
    }
    /* eslint-disable-next-line func-names */
    f[Symbol.toPrimitive] = function () {
        return accumulatedValue;
    };

    return f;
}

module.exports = sum;

// console.log(sum(1) == 1);
// console.log(sum(1)(2) == 3);
// console.log(sum(1)(2)(3) == 6);
// console.log(sum(1)(2)(3)(4) == 10);
