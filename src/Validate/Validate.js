import ValidatePattern from './ValidatePattern.js';
import ValidateExpression from './ValidateExpression.js';
import ValidateDelim from './ValidateDelim.js';

class Validate {
  // 의존성 주입 Delimiter
  constructor({ expressionPart, customDelimPart }) {
    this.expressionPart = expressionPart;
    this.customDelimPart = customDelimPart;
  }

  validate() {
    const { expressionPart, customDelimPart } = this;
    console.log('objec1t1');
    new ValidatePattern({ customDelimPart }).validate();
    console.log('objec1t2');
    new ValidateDelim({ customDelimPart }).validate();
    console.log('objec1t3');

    new ValidateExpression({
      customDelimPart,
      expressionPart,
    }).validate();
  }
}
export default Validate;
