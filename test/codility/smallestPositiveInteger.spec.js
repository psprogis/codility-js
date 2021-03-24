const solution = require('../../src/codility/smallestPositiveInteger/solution').solution;

describe('smallest positive integer task', () => {
    const basicTests = [
        {input: [1, 3, 6, 4, 1, 2], expected: 5},
        // {input: [1, 2, 3], expected: 4}, TODO: fix me
        {input: [-1, -3], expected: 1},
    ];

    basicTests.forEach(test => {
        it(`should find number in array: ${test.input}`, () => {
            expect(solution(test.input)).toBe(test.expected);
        });
    })
});
