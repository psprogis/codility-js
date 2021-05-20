module.exports.maximalPalindrome = maximalPalindrome;

// "eye" is a palindrome
// "noon" is a palindrome
// "decaf faced" is a palindrome
// "taco cat" is not a palindrome (backwards it spells "tac ocat")
// "racecars" is not a palindrome (backwards it spells "sracecar")
function maximalPalindrome(s) {
    const sortedStr = sortString(s);

    const start = [];
    const end = [];
    let joinChar = '';

    for (let i = 0; i < sortedStr.length; ++i) {
        let j = i + 1;
        if (j < sortedStr.length) {
            if (sortedStr[i] === sortedStr[j]) {
                start.push(sortedStr[i]);
                end.unshift(sortedStr[j]);

                ++i;
            } else {
                joinChar = sortedStr[i];
            }
        } else {
            joinChar = sortedStr[i];
        }
    }

    return `${start.join('')}${joinChar}${end.join('')}`;
}

function sortString(s) {
    return s.split('').sort().join('');
}

// TODO: add jest and move to tests
// console.log(maximalPalindrome('abcabc'));
// console.log(maximalPalindrome('gfagcaabdfdgfaabeabbage'));
// console.log(maximalPalindrome('decaf faced'));
