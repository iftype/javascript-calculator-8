import ValidateExpression from '../src/ValidateExpression.js';

const valid = new ValidateExpression();

const vaildIsStartNumber = valid.vaildIsStartNumber.name;
describe(vaildIsStartNumber, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidateExpression(',1,2,3');
    expect(() => validator.vaildIsStartNumber()).toThrow(Error);
  });
  test('패스 테스트', () => {
    const validator = new ValidateExpression('1,2,3,,');
    expect(() => validator.vaildIsStartNumber()).not.toThrow();
  });
});

const vaildIsEndNumber = valid.vaildIsEndNumber.name;
describe(vaildIsEndNumber, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidateExpression('1,2,3,');
    expect(() => validator.vaildIsEndNumber()).toThrow(Error);
  });
});
