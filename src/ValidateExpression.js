import Delimiter from './Delimiter';
//표현식 부분 검사하는 클래스
class ValidateExpression {
  //자기 자신을 리턴받기위해 멤버변수를 가짐
  constructor(expPart) {
    this.expPart = expPart || '';
  }

  //표현식의 첫 부분이 숫자인지 판별 리팩토링때 utils로 뺄 생각 중
  //,1,2,3 Error
  vaildIsStartNumber() {
    if (!Number.isInteger(Number(this.expPart[0])))
      throw new Error('식의 첫 부분은 숫자여야 합니다');
    return this;
  }

  //표현식의 끝 부분이 숫자인지 판별 리팩토링때 utils로 뺄 생각 중
  //1,2,3, Error
  vaildIsEndNumber() {
    if (!Number.isInteger(Number(this.expPart[this.expPart.length - 1])))
      throw new Error('식은 숫자로 끝나야 합니다');
    return this;
  }

  //공백과 숫자로 이루어진 문자열을 분해하여 숫자인지 검증
  // 공백이 두개나오면 특수문자가 연속 두 번 나온것
  validMultipleDelim() {
    const delimiter = new Delimiter();
    const tokenList = delimiter.splitDelimExpression(this.expPart);
    if (tokenList.join('').includes('  '))
      throw new Error('구분자를 연속해서 사용했습니다');
    return this;
  }

  //공백과 숫자로 이루어진 문자열을 분해하여 숫자인지 검증
  // 공백이 아닌 문자는 구분자 리스트에 없는 문자
  validIsInDelimList() {
    const delimiter = new Delimiter();
    const tokenList = delimiter.splitDelimExpression(this.expPart);
    tokenList.forEach((token) => {
      if (token !== ' ' && !Number.isInteger(Number(token)))
        throw new Error('지정된 구분자가 아닙니다');
    });
    return this;
  }

  //메소드 체이닝
  validate() {
    //표현식 파트가 없으면 검증할 필요없음, ""는 0임
    if (this.expPart.length === 0) return;
    //체이닝
    this.vaildIsStartNumber()
      .vaildIsEndNumber()
      .validMultipleDelim()
      .validIsInDelimList();
  }
}

export default ValidateExpression;
