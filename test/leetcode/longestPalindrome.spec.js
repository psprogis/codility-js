const { longestPalindrome } = require('../../src/leetcode/longestPalindrome');

describe('longest palindrome task', () => {
    const basicTests = [
        { input: 'babad', expected: 'aba' },
        { input: 'cbbd', expected: 'bb' },
        { input: 'mississippi', expected: 'ississi' },
        { input: 'ac', expected: 'c' },
    ];

    basicTests.forEach(test => {
        it(`should find the longest palindrome in the string: ${test.input}`, () => {
            expect(longestPalindrome(test.input)).toBe(test.expected);
        });
    });
});
