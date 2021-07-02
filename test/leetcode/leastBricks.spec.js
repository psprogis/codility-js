const { leastBricks } = require('../../src/leetcode/leastBricks');

describe('cross least bricks task', () => {
    const basicTests = [
        { input: [[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]], expected: 2 },
        { input: [[1], [1], [1]], expected: 3 },
    ];

    basicTests.forEach(test => {
        it(`should find the least bricks in the wall: ${test.input}`, () => {
            expect(leastBricks(test.input)).toBe(test.expected);
        });
    });
});
