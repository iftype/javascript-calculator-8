import { isNumber } from '../utils/utils.js';
import { SPACE, DOUBLE_SPACE } from '../constants/constant.js';
import Delimiter from '../Delimiter.js';
import Extractor from '../Extractor.js';

// 표현식 부분 검사하는 클래스
class ValidateExpression {
  // 자기 자신을 리턴받기위해 멤버변수를 가짐
  constructor({ expressionPart, customDelimPart }) {
    this.expressionPart = expressionPart || '';
    this.customDelimPart = customDelimPart || '';
    this.customDelim = '';

    this.delimiter = new Delimiter();
  }

  // 표현식의 첫 부분이 숫자인지 판별
  // ,1,2,3 Error
  validIsStartNumber() {
    if (!isNumber(this.expressionPart[0])) {
      throw new Error('식의 첫 부분은 숫자여야 합니다');
    }
    return this;
  }

  // 표현식의 끝 부분이 숫자인지 판별
  // 1,2,3, Error
  validIsEndNumber() {
    if (!isNumber(this.expressionPart[this.expressionPart.length - 1])) {
      throw new Error('식은 숫자로 끝나야 합니다');
    }
    return this;
  }

  // 공백과 숫자로 이루어진 문자열을 분해하여 숫자인지 검증
  // 공백이 두개나오면 특수문자가 연속 두 번 나온것
  validMultipleDelim() {
    const tokenList = this.delimiter.splitDelimExpression(this.expressionPart);
    if (tokenList.join('').includes(DOUBLE_SPACE)) {
      throw new Error('구분자를 연속해서 사용했습니다');
    }
    return this;
  }

  // 공백과 숫자로 이루어진 문자열을 분해하여 숫자인지 검증
  // 공백이 아닌 문자는 구분자 리스트에 없는 문자
  validIsInDelimList() {
    const tokenList = this.delimiter.splitDelimExpression(this.expressionPart);
    tokenList.forEach((token) => {
      if (token !== SPACE && !isNumber(token)) {
        throw new Error('지정된 구분자가 아닙니다');
      }
    });
    return this;
  }

  // 메소드 체이닝
  validate() {
    if (this.expressionPart === '') return;
    this.customDelim = Extractor.extractCustomDelimiter(this.customDelimPart);
    this.delimiter.addDelimiter(this.customDelim);

    this.validIsStartNumber()
      .validIsEndNumber()
      .validMultipleDelim()
      .validIsInDelimList();
  }
}

export default ValidateExpression;
