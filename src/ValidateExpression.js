//표현식 부분 검사하는 클래스
class ValidateExpression {
  //자기 자신을 리턴받기위해 멤버변수를 가짐
  constructor(string) {
    this.string = string || '';
  }

  //표현식의 첫 부분이 숫자인지 판별 리팩토링때 utils로 뺄 생각 중
  vaildIsStartNumber() {
    if (!Number.isInteger(Number(this.string[0])))
      throw new Error('식의 첫 부분은 숫자여야 합니다');
    return this;
  }
}

export default ValidateExpression;
