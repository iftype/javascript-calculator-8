import { Console } from '@woowacourse/mission-utils';
import Calculator from './Calculator.js';

class App {
  async run() {
    try {
      const userInput = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );

      const calculator = new Calculator(userInput);

      Console.print(`결과 : ${calculator.calculate()}`);
    } catch (error) {
      const formattingErrorMsg = new Error(`[ERROR]${error.message}`);
      Console.print(formattingErrorMsg.message);
      throw formattingErrorMsg;
    }
  }
}

export default App;
