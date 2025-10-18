import ValidatePattern from '../src/ValidatePattern.js';

const valid = new ValidatePattern();

const validHeadPattern = valid.validHeadPattern.name;
describe(validHeadPattern, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidatePattern('/d\n');
    expect(() => validator.validHeadPattern()).toThrow(Error);
  });
  test('성공 테스트', () => {
    const validator = new ValidatePattern('//?');
    expect(() => validator.validHeadPattern()).not.toThrow();
  });
});

const validTailPattern = valid.validTailPattern.name;
describe(validTailPattern, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidatePattern('//d\t1,2,3');
    expect(() => validator.validTailPattern()).toThrow(Error);
  });
});

const validIsBlank = valid.validIsBlank.name;
describe(validIsBlank, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidatePattern('');
    expect(() => validator.validIsBlank()).toThrow(Error);
  });
});

const vaildIsSingle = valid.vaildIsSingle.name;
describe(vaildIsSingle, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidatePattern('//??\\n');
    expect(() => validator.vaildIsSingle()).toThrow(Error);
  });
});
const validIsNumber = valid.validIsNumber.name;
describe(validIsNumber, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidatePattern('//2\\n');
    expect(() => validator.validIsNumber()).toThrow(Error);
  });
});
const validate = valid.validate.name;
describe(validate, () => {
  test('종합 테스트', () => {
    const validator = new ValidatePattern('//d\t');
    expect(() => validator.validate()).toThrow(Error);
  });
});
