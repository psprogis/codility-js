const { moves } = require('../../../src/hackerrank/booking/customSortedArray');

describe('moves function', () => {

    const basicTests = [
        {input: [13, 10, 21, 20], expected: 1},
        {input: [8, 5, 11, 4, 6], expected: 2},
        {input: [], expected: 0},
    ];

    basicTests.forEach(test => {
        it(`should find number of moves in array: ${test.input}`, () => {
            expect(moves(test.input)).toBe(test.expected);
        });
    })
});
