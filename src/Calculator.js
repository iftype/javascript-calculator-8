import Extractor from './Extractor.js';
import Delimiter from './Delimiter.js';
import ValidatePattern from './ValidatePattern.js';
import ValidateExpression from './ValidateExpression.js';
//실행 과정을 담기 위한 클래스
class Calculator {
  //APP.js에서 입력값을 받아 생성
  constructor(userInput) {
    this.delimiter = new Delimiter();
    this.userInput = userInput || '';
  }
  //실행부
  calculate() {
    // PART 커스텀 구분자
    // 유효성 검사 |  커스텀 구분자
    // 파트 나누기
    //커스텀 문자 추출하고 더하기
    const customDelimPart = Extractor.extractCustomPart(this.userInput);
    const customDelim = Extractor.extractCustomDelimiter(customDelimPart);
    this.delimiter.addDelimiter(customDelim);

    const expressionPart = Extractor.extractExpressionPart(this.userInput);

    // 2-2 유효성 검사 |  표현식
    const validPattern = new ValidatePattern(customDelimPart);
    validPattern.validate();
    const validateExpression = new ValidateExpression(expressionPart);
    validateExpression.validate();

    // // 4.계산 계산위해서 배열 공백
    const tokenList = this.delimiter.splitDelimExpression(expressionPart);
    const result = this.sumNumberList(tokenList);
    // // 5. 결과 출력
    return result;
  }
  // 표현식 문자열을 구분자로 분리함
  // 공백이 포함된 토큰배열을 받아 조립하여 더함
  sumNumberList(tokenList) {
    console.log('계산', tokenList);
    return tokenList
      .join('')
      .split(' ')
      .map(Number)
      .reduce((acc, cur) => acc + cur);
  }
}
export default Calculator;
