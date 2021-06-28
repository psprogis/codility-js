const { setZeros } = require('../../src/leetcode/setZeros');

describe('set matrix zeros task', () => {
    const basicTests = [
        {
            input: [
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
            ],
            expected: [
                [1, 0, 1],
                [0, 0, 0],
                [1, 0, 1],
            ],
        },
        {
            input: [
                [0, 1, 2, 0],
                [3, 4, 5, 2],
                [1, 3, 1, 5],
            ],
            expected: [
                [0, 0, 0, 0],
                [0, 4, 5, 0],
                [0, 3, 1, 0],
            ],
        },
    ];

    basicTests.forEach(test => {
        it(`should set zeros in matrix: ${test.input}`, () => {
            expect(setZeros(test.input)).toStrictEqual(test.expected);
        });
    });
});
