import ValidatePattern from './ValidatePattern.js';
import ValidateExpression from './ValidateExpression.js';
import Delimiter from '../Delimiter.js';

class Validate {
  // 의존성 주입 Delimiter
  constructor({ expressionPart, customDelimPart, delimiter }) {
    this.expressionPart = expressionPart;
    this.customDelimPart = customDelimPart;
    this.delimiter = delimiter;
  }

  validate() {
    new ValidatePattern(this.customDelimPart).validate();
    new ValidateExpression(this.expressionPart, this.delimiter).validate();
  }
}
export default Validate;
