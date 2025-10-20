import ValidatePattern from '../src/Validate/ValidatePattern.js';
import Extractor from '../src/Extractor.js';

const valid = new ValidatePattern({});
//validHeadPattern 테스트
const validHeadPattern = valid.validHeadPattern.name;
describe(validHeadPattern, () => {
  test('에러발생 테스트', () => {
    const testObj = { customDelimPart: '/d\\n' };
    const validator = new ValidatePattern(testObj);
    expect(() => validator.validHeadPattern()).toThrow(Error);
  });
  test('성공 테스트', () => {
    const testObj = { customDelimPart: '//?' };
    const validator = new ValidatePattern(testObj);
    expect(() => validator.validHeadPattern()).not.toThrow();
  });
});

//validTailPattern 테스트
const validTailPattern = valid.validTailPattern.name;
describe(validTailPattern, () => {
  test('에러발생 테스트', () => {
    const testObj = { customDelimPart: '//d\\t' };
    const validator = new ValidatePattern(testObj);
    expect(() => validator.validTailPattern()).toThrow(Error);
  });
});
