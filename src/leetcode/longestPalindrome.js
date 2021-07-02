function longestPalindrome(str) {
    let start = 0;
    let end = 0;

    // check str length ?
    for (let i = 0; i < str.length; ++i) {
        const length1 = expandFromCenter(str, i, i);
        const length2 = expandFromCenter(str, i, i + 1);

        const length = Math.max(length1, length2);

        if (length > end - start) {
            start = Math.ceil(i - (length - 1) / 2);
            end = Math.floor(i + length / 2);
        }
    }

    return str.substring(start, end + 1);
}

function expandFromCenter(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        /* eslint-disable no-param-reassign */
        --left;
        ++right;
        /* eslint-enable no-param-reassign */
    }

    return right - left - 1;
}

module.exports.longestPalindrome = longestPalindrome;
