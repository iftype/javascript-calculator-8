import Pattern from './Pattern.js';

//구분자 패턴 부분을 유효성 검사하는 클래스
class ValidatePattern {
  //생성자로 커스텀 파트 부분을 받음
  //멤버 변수를 가지는 이유는 체이닝을 하기 위해서
  constructor(customPart) {
    this.customPart = customPart || '';
  }

  //Pattern클래스를 활용해 기준자부터 시작하는지 검사
  //아니라면 에러를 던져줌 그리고 체이닝을 위해 this를 리턴함
  validHeadPattern() {
    if (!Pattern.isStartHeadPattern(this.customPart))
      throw new Error('첫 번째 기준자를 잘못 입력하셨습니다.');
    return this;
  }

  validate() {
    // 커스텀 파트가 없으면 검증할 필요 없음
    if (this.customPart.length === 0) return;
    //검사시작
    this.validHeadPattern();
  }
}
export default ValidatePattern;
