function intersect(arr1, arr2) {
    const result = [];

    const map = arr1.reduce((acc, i) => {
        acc[i] = acc[i] ? acc[i] + 1 : 1;

        return acc;
    }, {});

    for (const element of arr2) {
        const count = map[element];

        if (count && count > 0) {
            result.push(element);
            map[element] -= 1;
        }
    }

    return result;
}

// wrong implementation
function intersect2(arr1, arr2) {
    const result = [];

    arr1.forEach(element => {
        if (arr2.includes(element)) {
            result.push(element);
        }
    });

    return result;
}

module.exports.intersect = intersect;
