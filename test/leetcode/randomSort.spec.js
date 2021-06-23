const { shuffle } = require('../../src/leetcode/randomSort');

describe('shuffle array task', () => {
    it('should randomly sort input array', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        for (let i = 0; i < 10; ++i) {
            expect(shuffle(input)).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        }
    });
});
