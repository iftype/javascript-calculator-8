import ValidateDelim from '../src/Validate/ValidateDelim.js';
import Extractor from '../src/Extractor.js';

//validIsBlank테스트
const valid = new ValidateDelim({ customDelimPart: '' });
const validIsBlank = valid.validIsBlank.name;
describe(validIsBlank, () => {
  test('에러발생 테스트', () => {
    const validTest = { customDelimPart: '' };
    const validator = new ValidateDelim(validTest);
    validator.customDelim = '';
    expect(() => validator.validIsBlank()).toThrow(Error);
  });
});

//validIsSingle
const validIsSingle = valid.validIsSingle.name;
describe(validIsSingle, () => {
  test('에러발생 테스트', () => {
    const validTest = { customDelimPart: '//??\\n' };
    const validator = new ValidateDelim(validTest);
    validator.customDelim = '??';
    expect(() => validator.validIsSingle()).toThrow(Error);
  });
});

//validIsNumber 테스트
const validIsNumber = valid.validIsNumber.name;
describe(validIsNumber, () => {
  test('에러발생 테스트', () => {
    const validTest = { customDelimPart: '//2\\n' };
    const validator = new ValidateDelim(validTest);
    validator.customDelim = '2';
    expect(() => validator.validIsNumber()).toThrow(Error);
  });
});
