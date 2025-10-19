import Extractor from './Extractor.js';
import Delimiter from './Delimiter.js';
import Validate from './Validate/Validate.js';
import { sumTokenList } from './utils/utils.js';

// 실행 과정을 담기 위한 클래스
class Calculator {
  constructor(userInput) {
    this.delimiter = new Delimiter();
    this.userInput = userInput || '';
  }

  calculate() {
    // 1. 커스텀 문자파트, 커스텀 문자, 표현식 파트 추출
    const customDelimPart = Extractor.extractCustomPart(this.userInput);
    const customDelim = Extractor.extractCustomDelimiter(customDelimPart);
    const expressionPart = Extractor.extractExpressionPart(this.userInput);
    // 2. 커스텀 구분자 추가, 없다면 ""
    this.delimiter.addDelimiter(customDelim);

    // 3. 커스텀 문자파트, 표현식 파트 검사 시작
    new Validate({
      customDelimPart,
      expressionPart,
      delimiter: this.delimiter,
    }).validate();

    // 4. 공백과 숫자로 만든 표현식 계산
    const tokenList = this.delimiter.splitDelimExpression(expressionPart);
    return sumTokenList(tokenList);
  }
}
export default Calculator;
