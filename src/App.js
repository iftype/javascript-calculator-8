import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const userInput = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );
      Console.print(`결과 : ${userInput}`);
    } catch (error) {
      const formattingErrorMsg = new Error(`[ERROR]${error.message}`);
      Console.print(formattingErrorMsg.message);
      throw formattingErrorMsg;
    }
  }
}

export default App;
