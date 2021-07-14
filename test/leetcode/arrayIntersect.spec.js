const { intersect } = require('../../src/leetcode/arrayIntersect');

describe('arrays intersection task', () => {
    const basicTests = [
        { input: [[1, 2, 2, 1], [2, 2]], expected: [2, 2] },
        { input: [[1, 2, 2, 1, 1], [2, 2, 1, 1]], expected: [2, 2, 1, 1] },
        { input: [[4, 9, 5], [9, 4, 9, 8, 4]], expected: [9, 4] },
    ];

    basicTests.forEach(test => {
        it(`should find intersection of 2 arrays: [${test.input[0]}], [${test.input[1]}]`, () => {
            expect(intersect(...test.input)).toStrictEqual(test.expected);
        });
    });
});
