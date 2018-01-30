require('chai').should();

describe('some feature', () => {

    it('should pass', () => { 'fff'.should.not.equal('bar'); });

it('should error', () => { (() => { throw new Error(); }).should.throw(); }); });