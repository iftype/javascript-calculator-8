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

const extractCustomPart = Extractor.extractCustomPart.name;
describe(extractCustomPart, () => {
  test(`성공 테스트`, () => {
    const element = '//*\\n1,2,3';
    const result = Extractor.extractCustomPart(element);
    expect(result).toBe('//*\\n');
  });
  test(`못찾았을때 테스트`, () => {
    const element = '//*\\n';
    const result = Extractor.extractCustomPart(element);
    expect(result).toBe('//*\\n');
  });
  test(`못찾았을때 테스트`, () => {
    const element = '';
    const result = Extractor.extractCustomPart(element);
    expect(result).toBe('');
  });
});

const extractCustomDelimiter = Extractor.extractCustomDelimiter.name;
describe(extractCustomDelimiter, () => {
  test(`성공 테스트`, () => {
    const element = '//*\\n1,2,3';
    const result = Extractor.extractCustomDelimiter(element);
    expect(result).toBe('*');
  });
  test(`성공 테스트`, () => {
    const element = '1,2,3';
    const result = Extractor.extractCustomDelimiter(element);
    expect(result).toBe('1,2,3');
  });
});

const extractExpressionPart = Extractor.extractExpressionPart.name;
describe(extractExpressionPart, () => {
  test(`성공 테스트`, () => {
    const element = '//*\\n1,2,3';
    const result = Extractor.extractExpressionPart(element);
    expect(result).toBe('1,2,3');
  });
  test(`성공 테스트`, () => {
    const element = '';
    const result = Extractor.extractExpressionPart(element);
    expect(result).toBe('');
  });
});
export default Extractor;
