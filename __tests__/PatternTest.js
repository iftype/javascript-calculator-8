import Pattern from '../src/Pattern';
describe('Pattern.js 테스트', () => {
  test(`성공 테스트`, () => {
    const string = '//*\n';
    const result = Pattern.isStartHeadPattern(string);
    expect(result).toBe(true);
  });
  test(`실패 테스트`, () => {
    const string = '/*\n';
    const result = Pattern.isStartHeadPattern(string);
    expect(result).toBe(false);
  });
});
