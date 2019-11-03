/* eslint-disable no-undef */
describe('mock function을 사용한 mocking', () => {
  it('sample1', () => {
    function forEach(items, callback) {
      for (let index = 0; index < items.length; index++) {
        callback(items[index]);
      }
    }

    const mockCallback = jest.fn((x) => 42 + x);
    forEach([0, 1], mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
  });

  it('sample2', () => {
    const calcFunction = (a, b, callback) => {
      callback(a, b);
    };

    const mockFunction = jest.fn((a, b) => a + b);
    calcFunction(1, 2, mockFunction);

    expect(mockFunction.mock.calls.length).toBe(1); // 실행횟수검증
    expect(mockFunction.mock.results[0].value).toBe(3);
  });
});

describe('mock clear()', () => {
  it('sample1', () => {
    const calcFunction = (a, b, callback) => {
      callback(a, b);
    };

    const mockFunction = jest.fn((a, b) => a + b);
    calcFunction(1, 2, mockFunction);

    expect(mockFunction.mock.calls.length).toBe(1); // 실행횟수검증
    expect(mockFunction.mock.results[0].value).toBe(3); // 결과값 검증

    mockFunction.mockClear();

    expect(mockFunction.mock.calls.length).toBe(0); // 실행횟수 초기화
    expect(mockFunction.mock.results[0]).toBe(undefined); // 결과값 초기화
  });
});
