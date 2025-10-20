import Pattern from '../Pattern.js';
// 구분자 패턴 부분을 유효성 검사하는 클래스
class ValidatePattern {
  // 생성자로 커스텀 파트 부분을 받음
  // 멤버 변수를 가지는 이유는 체이닝을 하기 위해서
  constructor({ customDelimPart }) {
    this.customDelimPart = customDelimPart || '';
  }

  // Pattern클래스를 활용해 기준자부터 시작하는지 검사
  // 아니라면 에러를 던져줌 그리고 체이닝을 위해 this를 리턴함
  validHeadPattern() {
    if (!Pattern.isStartHeadPattern(this.customDelimPart)) {
      throw new Error('첫 번째 기준자를 잘못 입력하셨습니다.');
    }
    return this;
  }

  // Pattern클래스를 활용해 Tail이 존재하는지 검사
  // 구분자에 잘라서 넣기 때문에 끝나는게 테일과 같아야함
  validTailPattern() {
    if (!Pattern.isEndTailPattern(this.customDelimPart)) {
      throw new Error('두 번째 기준자를 잘못 입력하셨습니다.');
    }
    return this;
  }

  validate() {
    if (this.customDelimPart === '') return;

    this.validHeadPattern().validTailPattern();
  }
}
export default ValidatePattern;
