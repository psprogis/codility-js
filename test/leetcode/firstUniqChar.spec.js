const { firstUniqChar: firstUniqCharSpec } = require('../../src/leetcode/firstUniqChar');

describe('first uniq character task', () => {
    const basicTests = [
        { input: 'leetcode', expected: 0 },
        { input: 'loveleetcode', expected: 2 },
        { input: 'aabb', expected: -1 },
    ];

    basicTests.forEach(test => {
        it(`should find first uniq character index: ${test.input}`, () => {
            expect(firstUniqCharSpec(test.input)).toBe(test.expected);
        });
    });
});
