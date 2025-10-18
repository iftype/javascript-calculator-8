import Delimiter from '../src/Delimiter';

const delimiter = new Delimiter();

const hasDelimiterString = delimiter.hasDelimiterString;
describe(hasDelimiterString, () => {
  test('성공 테스트', () => {
    const string = ':';
    const delim = new Delimiter();
    const result = delim.hasDelimiterString(string);
    expect(result).toBe(true);
  });
  test(`실패 테스트`, () => {
    const string = ';';
    const delim = new Delimiter();
    const result = delim.hasDelimiterString(string);
    expect(result).toBe(false);
  });
});

const splitDelimExpression = delimiter.splitDelimExpression;
describe(splitDelimExpression, () => {
  test('성공 테스트', () => {
    const string = ',1,;,3,';
    const delim = new Delimiter();
    const result = delim.splitDelimExpression(string);
    expect(result).toStrictEqual([' ', '1', ' ', ';', ' ', '3', ' ']);
  });
});
