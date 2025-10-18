import Extractor from './Extractor.js';
import ValidatePattern from './ValidatePattern.js';

//실행 과정을 담기 위한 클래스
class Calculator {
  //APP.js에서 입력값을 받아 생성
  constructor(userInput) {
    this.userInput = userInput || '';
  }
  //실행부
  calculate() {
    //추출 객체 생성해서, 커스텀 파트 부분 추출
    const customDelimPart = Extractor.extractCustomPart(this.userInput);
    console.log('커스텀파트는', customDelimPart);
    //커스텀 파트 유효성 검사
    const validPattern = new ValidatePattern(customDelimPart);
    validPattern.validate();
  }
}
export default Calculator;
