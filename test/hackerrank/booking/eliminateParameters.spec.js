const { computeParameterValue } = require('../../../src/hackerrank/booking/eliminateParameters');

describe('compute parameter value, "eliminate algorithm"', () => {
    it('should pass basic test', () => {
        expect(computeParameterValue([['P1:a', 'P2:b'], ['P1:x', 'P2:b']])).toEqual(['x', 'b']);
    });
});
