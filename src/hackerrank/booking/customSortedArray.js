/*
 * Determine the minimum number of moves required to sort an array such that all of the even elements
 * are at the beginning of the array and all of the odd elements are at the end of the array.
 *
 * Input parameter: int arr[n] - an array of positive integers
 * Returns: int - the minimum number of moves it takes to sort an array of integers with all even elements
 *          at earlier indices that any odd element.
 * Note: the order of the elements within even or odd does not matter.
 * Constraints:
 *   - 2 <= n <= 10^5
 *   - 1 <= arr[i] <= 10^9, where 0 <= i < n.
 *   - it is guaranteed that array a contains at least one even and one odd element.
 */

function moves(arr) {
    let movesCount = 0;
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (isEven(arr[start])) {
            ++start;
            continue;
        }

        if (!isEven(arr[end])) {
            --end;
            continue;
        }

        swap(arr, start, end);

        ++start;
        --end;
        ++movesCount;
    }

    return movesCount;
}

function isEven(number) {
    return number % 2 === 0;
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

module.exports.moves = moves;
