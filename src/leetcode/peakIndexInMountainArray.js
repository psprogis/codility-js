
// binary search, O(log n)
function peakIndexInMountainArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const middle = Math.floor((start + end) / 2);

        if (arr[middle] < arr[middle + 1]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }

    return start;
}

// O(n) solution
// eslint-disable-next-line
function peakIndexInMountainArray2(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        const diff = arr[i] - arr[i + 1];

        if (diff > 0) {
            return i;
        }
    }

    return arr.length - 1;
}

module.exports.peakIndexInMountainArray = peakIndexInMountainArray;
