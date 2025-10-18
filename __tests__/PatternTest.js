import Pattern from '../src/Pattern';

describe('Pattern.js isStartHeadPattern 테스트', () => {
  test(`성공 테스트`, () => {
    const string = '//*\\n';
    const result = Pattern.isStartHeadPattern(string);
    expect(result).toBe(true);
  });
  test(`실패 테스트`, () => {
    const string = '/*\\n';
    const result = Pattern.isStartHeadPattern(string);
    expect(result).toBe(false);
  });
});

describe('Pattern.js 테스트', () => {
  test(`성공 테스트`, () => {
    const string = '//*\\n';
    const result = Pattern.hasTailPattern(string);
    expect(result).toBe(true);
  });
  test(`실패 테스트`, () => {
    const string = '//*\\';
    const result = Pattern.hasTailPattern(string);
    expect(result).toBe(false);
  });
});

describe('Pattern.js 테스트', () => {
  test(`성공 테스트`, () => {
    const string = '//*\\n';
    const result = Pattern.hasPatterns(string);
    expect(result).toBe(true);
  });
  test(`실패 테스트`, () => {
    const string = '/*\\n';
    const result = Pattern.hasPatterns(string);
    expect(result).toBe(false);
  });
});
