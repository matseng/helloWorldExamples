// appSpec.js
// karma start karma.conf.js

describe('Validator', function() {
  it('should recognize balanced braces, brackets and parenthesis', function() {
    // expect(validator('{}')).toBe(true);
    expect(validator('([)')).toBe(false);
    // expect(validator('([{}])')).toBe(true);
    // expect(validator('{[](){[]}}')).toBe(true);
    expect(validator('{[](){[]}}]')).toBe(false);
  })
});
