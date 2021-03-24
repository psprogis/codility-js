function flatten(arr) {
    while (arr.some(Array.isArray)) {
        arr = Array.prototype.concat.apply([], arr);
    }

    return arr;
}

console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 1, 2, 3]
console.log(flatten([1, 2, 3, [1, 2, 3], 4, 5, 6 ])); // [1, 2, 3, 1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 3, [50, 11, [34, 56, 8]], 4, 5, 6 ])); // [ 1, 2, 3, 50, 11, 34, 56, 8, 4, 5, 6 ]


