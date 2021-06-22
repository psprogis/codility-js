const { peakIndexInMountainArray } = require('../../src/leetcode/peakIndexInMountainArray');

describe('mountain peak task', () => {
    const basicTests = [
        { input: [1, 2, 3, 4, 3, 2, 1], expected: 3 },
        { input: [9, 11, 13, 14, 15, 6, 4, 2], expected: 4 },
        { input: [10, 9, 8, 7, 6], expected: 0 },
    ];

    basicTests.forEach(test => {
        it(`should find peak in: ${test.input}`, () => {
            expect(peakIndexInMountainArray(test.input)).toBe(test.expected);
        });
    });
});
