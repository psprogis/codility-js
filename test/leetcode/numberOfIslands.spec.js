const { numIslands } = require('../../src/leetcode/numberOfIslands');

describe('number of islands task', () => {
    it('should handle grid with 1 island', () => {
        const grid = [
            ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
        ];

        expect(numIslands(grid)).toBe(1);
    });

    it('should handle grid with 3 island', () => {
        const grid = [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1'],
        ];

        expect(numIslands(grid)).toBe(3);
    });

    it('should handle one row grid', () => {
        const grid = [
            ['1', '0', '1'],
        ];

        expect(numIslands(grid)).toBe(2);
    });
});
