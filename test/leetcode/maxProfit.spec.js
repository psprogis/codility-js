const { maxProfit } = require('../../src/leetcode/maxProfit');

describe('max profit task', () => {
    const basicTests = [
        { input: [7, 1, 5, 3, 6, 4], expected: 5 },
        { input: [7, 6, 4, 3, 1], expected: 0 },
    ];

    basicTests.forEach(test => {
        it(`should find max profit in stock's prices: [${test.input}]`, () => {
            expect(maxProfit(test.input)).toBe(test.expected);
        });
    });
});
