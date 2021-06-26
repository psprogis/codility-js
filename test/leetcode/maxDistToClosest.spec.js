const { maxDistToClosest } = require('../../src/leetcode/maxDistToClosest');

describe('max distance to closest seat task', () => {
    const basicTests = [
        { input: [1, 0, 0, 0, 1, 0, 1], expected: 2 },
        { input: [1, 0, 0, 0], expected: 3 },
        { input: [0, 0, 0, 1, 0, 0, 0, 1], expected: 3 },
    ];

    basicTests.forEach(test => {
        it(`should find max distance in: ${test.input}`, () => {
            expect(maxDistToClosest(test.input)).toBe(test.expected);
        });
    });
});
