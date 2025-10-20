import ValidatePattern from '../src/Validate/ValidatePattern.js';
import Extractor from '../src/Extractor.js';

const valid = new ValidatePattern();
//validHeadPattern 테스트
const validHeadPattern = valid.validHeadPattern.name;
describe(validHeadPattern, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidatePattern('/d\\n');
    expect(() => validator.validHeadPattern()).toThrow(Error);
  });
  test('성공 테스트', () => {
    const validator = new ValidatePattern('//?');
    expect(() => validator.validHeadPattern()).not.toThrow();
  });
});

//validTailPattern 테스트
const validTailPattern = valid.validTailPattern.name;
describe(validTailPattern, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidatePattern('//d\t');
    expect(() => validator.validTailPattern()).toThrow(Error);
  });
});

//validIsBlank테스트
const validIsBlank = valid.validIsBlank.name;
describe(validIsBlank, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidatePattern('');
    validator.customDelim = '';
    expect(() => validator.validIsBlank()).toThrow(Error);
  });
});

//validIsSingle
const validIsSingle = valid.validIsSingle.name;
describe(validIsSingle, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidatePattern('//??\\n');
    validator.customDelim = '??';
    expect(() => validator.validIsSingle()).toThrow(Error);
  });
});

//validIsNumber 테스트
const validIsNumber = valid.validIsNumber.name;
describe(validIsNumber, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidatePattern('//2\\n');
    validator.customDelim = '2';
    expect(() => validator.validIsNumber()).toThrow(Error);
  });
});

//종합테스트
const validate = valid.validate.name;
describe(validate, () => {
  test('종합 테스트', () => {
    const validator = new ValidatePattern('//d\t');
    expect(() => validator.validate()).toThrow(Error);
  });
});
