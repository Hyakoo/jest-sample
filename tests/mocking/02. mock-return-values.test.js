/* eslint-disable no-undef */
describe('반환값 mocking하기', () => {
  it('sample1', () => {
    const myMock = jest.fn();
    expect(myMock()).toBe(undefined);

    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce('x')
      .mockReturnValue(true);

    expect(myMock()).toBe(10);
    expect(myMock()).toBe('x');
    expect(myMock()).toBe(true);
    expect(myMock()).toBe(true);
  });
  it('sample2', () => {
    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(filterTestFn);

    expect(result).toStrictEqual([11]);
    expect(filterTestFn.mock.calls.length).toBe(2);
  });
});
