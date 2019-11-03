/* eslint-disable no-undef */
const foo = require('../../src/foo');

jest.mock('../../src/foo');

describe('구현을 mocking하기', () => {
  it('sample1', () => {
    foo.mockImplementation(() => 42);
    expect(foo()).toBe(42);
  });
});

describe('mock reset()', () => {
  beforeEach(() => {
    foo.mockReset();
  });
  it('sample1', () => {
    foo.mockImplementation(() => 42);
    expect(foo()).toBe(42);
  });
  it('sample2', () => {
    expect(foo()).toBe(undefined);
  });
});
