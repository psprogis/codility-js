const { removeDuplicates } = require('../../src/leetcode/removeDuplicates');

describe('remove duplicates in sorted array task', () => {
    const basicTests = [
        { input: [1, 1, 2], expected: [1, 2] },
        { input: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4], expected: [0, 1, 2, 3, 4] },
    ];

    basicTests.forEach(test => {
        it(`should remove duplicates in: ${test.input}`, () => {
            expect(removeDuplicates(test.input)).toBe(test.expected.length);
            expect(test.input).toStrictEqual(test.expected);
        });
    });
});
