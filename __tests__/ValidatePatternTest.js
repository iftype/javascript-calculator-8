import ValidatePattern from '../src/ValidatePattern.js';

const valid = new ValidatePattern();

const validHeadPattern = valid.validHeadPattern.name;
describe(validHeadPattern, () => {
  test('실패 테스트', () => {
    const validator = new ValidatePattern('/d\n');
    expect(() => validator.validHeadPattern()).toThrow(Error);
  });
  test('성공 테스트', () => {
    const validator = new ValidatePattern('//?');
    expect(() => validator.validate()).not.toThrow();
  });
  test('빈문자일때', () => {
    const validator = new ValidatePattern('');
    expect(() => validator.validate()).not.toThrow();
  });
});
