import Extractor from './Extractor.js';
import Delimiter from './Delimiter.js';
import ValidatePattern from './Validate/ValidatePattern.js';
import ValidateExpression from './Validate/ValidateExpression.js';
//실행 과정을 담기 위한 클래스
class Calculator {
  constructor(userInput) {
    this.delimiter = new Delimiter();
    this.userInput = userInput || '';
  }
  calculate() {
    const customDelimPart = Extractor.extractCustomPart(this.userInput);
    const customDelim = Extractor.extractCustomDelimiter(customDelimPart);
    const expressionPart = Extractor.extractExpressionPart(this.userInput);

    new ValidatePattern(customDelimPart).validate();
    this.delimiter.addDelimiter(customDelim);
    new ValidateExpression(expressionPart).validate();

    const tokenList = this.delimiter.splitDelimExpression(expressionPart);
    return this.sumNumberList(tokenList);
  }

  // 표현식 문자열을 구분자로 분리함
  // 공백이 포함된 토큰배열을 받아 조립하여 더함
  sumNumberList(tokenList) {
    return tokenList
      .join('')
      .split(' ')
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0);
  }
}
export default Calculator;
