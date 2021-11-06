const { maxArea } = require('../../src/leetcode/water');

describe('max water area task', () => {
    const basicTests = [
        { input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
        { input: [1, 1], expected: 1 },
        { input: [4, 3, 2, 1, 4], expected: 16 },
        { input: [1, 2, 1], expected: 2 },
        { input: [0, 0, 1], expected: 0 },
    ];

    basicTests.forEach(test => {
        it(`should calculate highest possible water amount in: ${test.input}`, () => {
            expect(maxArea(test.input)).toBe(test.expected);
        });
    });
});
