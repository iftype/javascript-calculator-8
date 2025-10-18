import ValidateExpression from '../src/ValidateExpression.js';

const valid = new ValidateExpression();

//표현식검증 숫자로 시작하는지 테스트
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

//표현식검증 숫자로 끝나는지 테스트
const vaildIsEndNumber = valid.vaildIsEndNumber.name;
describe(vaildIsEndNumber, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidateExpression('1,2,3,');
    expect(() => validator.vaildIsEndNumber()).toThrow(Error);
  });
});

//표현식 검증, 연속 문자 테스트
const validMultipleDelim = valid.validMultipleDelim.name;
describe(validMultipleDelim, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidateExpression('1,,2;3');
    expect(() => validator.validMultipleDelim()).toThrow(Error);
  });
  test('패스 테스트', () => {
    const validator = new ValidateExpression('1,2,3');
    expect(() => validator.validMultipleDelim()).not.toThrow();
  });
});

//표현식 검증, 특수문자 있는지 테스트
const validIsInDelimList = valid.validIsInDelimList.name;
describe(validIsInDelimList, () => {
  test('에러발생 테스트', () => {
    const validator = new ValidateExpression('1,2;3');
    expect(() => validator.validIsInDelimList()).toThrow(Error);
  });
  test('패스 테스트', () => {
    const validator = new ValidateExpression('1,2,3');
    expect(() => validator.validIsInDelimList()).not.toThrow();
  });
});
