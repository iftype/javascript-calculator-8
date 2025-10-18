import Extractor from '../src/Extractor';

const isNumber = Extractor.isNumber.name;
describe(isNumber, () => {
  test(`성공 테스트`, () => {
    const element = '-1';
    const result = Extractor.isNumber(element);
    expect(result).toBe(true);
  });
  test(`실패 테스트`, () => {
    const element = ' ';
    const result = Extractor.isNumber(element);
    expect(result).toBe(false);
  });
  test(`실패 테스트`, () => {
    const element = '*';
    const result = Extractor.isNumber(element);
    expect(result).toBe(false);
  });
});

const indexOfNumber = Extractor.indexOfNumber.name;
describe(indexOfNumber, () => {
  test(`성공 테스트`, () => {
    const element = '//*\\n1';
    const result = Extractor.indexOfNumber(element);
    expect(result).toBe(5);
  });
  test(`성공 테스트`, () => {
    const element = 'abcde1';
    const result = Extractor.indexOfNumber(element);
    expect(result).toBe(5);
  });
});
