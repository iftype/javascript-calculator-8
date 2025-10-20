import Extractor from '../Extractor.js';
import { isNumber } from '../utils/utils.js';
import { convertEscapes } from '../utils/escape.js';
class ValidateDelim {
  // 생성자로 커스텀 파트 부분을 받음
  // 멤버 변수를 가지는 이유는 체이닝을 하기 위해서
  constructor({ customDelimPart }) {
    this.customDelimPart = customDelimPart;
    this.customDelim = '';
  }

  // Extractor 활용해 구분자부분을 가져옴, 값이 비었는지 검사
  validIsBlank() {
    if (this.customDelim.trim() === '') {
      throw new Error('커스텀 구분자가 비어았습니다');
    }
    return this;
  }

  // Extractor 활용해 구분자부분을 가져옴, 구분자가 두개 이상 들어갔는지 확인
  validIsSingle() {
    if (convertEscapes(this.customDelim).length > 1) {
      throw new Error('커스텀 구분자를 하나만 입력하세요');
    }
    return this;
  }

  // Extractor 활용해 구분자를 부분을 가져옴, 숫자인지 확인하고
  // 숫자라면 구분자 지정 못하게함

  validIsNumber() {
    if (isNumber(this.customDelim)) {
      throw new Error('숫자를 구분자로 지정할 수 없습니다');
    }
    return this;
  }

  validate() {
    if (this.customDelimPart === '') return;

    this.customDelim = Extractor.extractCustomDelimiter(this.customDelimPart);
    console.log('object');
    this.validIsBlank().validIsSingle().validIsNumber();
  }
}
export default ValidateDelim;
