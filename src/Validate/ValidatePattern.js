import Pattern from '../Pattern.js';
import Extractor from '../Extractor.js';
import { isNumber } from '../utils/utils.js';

// 구분자 패턴 부분을 유효성 검사하는 클래스
class ValidatePattern {
  // 생성자로 커스텀 파트 부분을 받음
  // 멤버 변수를 가지는 이유는 체이닝을 하기 위해서
  constructor(customPart) {
    this.customPart = customPart || '';
  }

  // Pattern클래스를 활용해 기준자부터 시작하는지 검사
  // 아니라면 에러를 던져줌 그리고 체이닝을 위해 this를 리턴함
  validHeadPattern() {
    if (!Pattern.isStartHeadPattern(this.customPart)) {
      throw new Error('첫 번째 기준자를 잘못 입력하셨습니다.');
    }
    return this;
  }

  // Pattern클래스를 활용해 Tail이 존재하는지 검사
  // 구분자에 잘라서 넣기 때문에 끝나는게 테일과 같아야함
  validTailPattern() {
    if (!Pattern.isEndTailPattern(this.customPart)) {
      throw new Error('두 번째 기준자를 잘못 입력하셨습니다.');
    }
    return this;
  }

  // Extractor 활용해 구분자부분을 가져옴, 값이 비었는지 검사
  validIsBlank() {
    if (Extractor.extractCustomDelimiter(this.customPart).length === 0) {
      throw new Error('커스텀 구분자가 비어았습니다');
    }
    return this;
  }

  // Extractor 활용해 구분자부분을 가져옴, 구분자가 두개 이상 들어갔는지 확인
  validIsSingle() {
    if (Extractor.extractCustomDelimiter(this.customPart).length > 1) {
      throw new Error('커스텀 구분자를 하나만 입력하세요');
    }
    return this;
  }

  // Extractor 활용해 구분자를 부분을 가져옴, 숫자인지 확인하고
  // 숫자라면 구분자 지정 못하게함
  validIsNumber() {
    const customDelim = Extractor.extractCustomDelimiter(this.customPart);
    if (isNumber(customDelim)) {
      throw new Error('숫자를 구분자로 지정할 수 없습니다');
    }
    return this;
  }

  validate() {
    // 커스텀 파트가 없으면 검증할 필요 없음
    if (this.customPart.length === 0) return;

    this.validHeadPattern()
      .validTailPattern()
      .validIsBlank()
      .validIsSingle()
      .validIsNumber();
  }
}
export default ValidatePattern;
