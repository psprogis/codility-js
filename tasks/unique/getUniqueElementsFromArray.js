function getUnique(arr) {
    return arr.filter( (item, index) => arr.indexOf(item) === index);
}

// console.log(getUnique([5, 6, 10]));    // [5, 6, 10]
// console.log(getUnique([5, 5, 6, 10, 7, 9, 7, 0])); // [5, 6, 10, 7, 9, 0]
