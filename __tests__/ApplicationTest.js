import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

//여러개테스트
describe('문자열 계산기', () => {
  test.each([
    ['', '결과 : 0'],
    ['1,2', '결과 : 3'],
    ['//n\\n', '결과 : 0'],
    ['1,2,3', '결과 : 6'],
    ['//_\\n1_2:4', '결과 : 7'],
    ['//\\\\n1\\2:5', '결과 : 8'],
    ['//n\\n1n2n3:4', '결과 : 10'],
    ['//;\\n1;22;3', '결과 : 26'],
    //이스케이프추가
    ['//\\\\n0\\1', '결과 : 1'],
    ['//\\n\\n0\n1', '결과 : 1'],
    ['//\\t\\n0\\t1', '결과 : 1'],
    ['//\\r\\n0\\r1', '결과 : 1'],
    ['//\\v\\n0\\v1', '결과 : 1'],
    ['//\\f\\n0\\f1', '결과 : 1'],
    ["//\\'\\n0\\'1", '결과 : 1'],
  ])('테스트 시작 : %s, 나와야 하는 %s', async (input, output) => {
    const inputs = [input];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = [output];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('커스텀 구분자 사용', async () => {
    const inputs = ['//;\\n1'];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ['결과 : 1'];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외 테스트 음수인 경우', async () => {
    const inputs = ['-1,2,3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('예외 테스트 구분자 형식', async () => {
    const inputs = ['1..2.3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
  test('기준자를 오타낸 경우', async () => {
    const inputs = ['/;\n1,2,3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('커스텀 구분자 입력 안함', async () => {
    const inputs = ['//\n1,2,3'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
  test('공백처리', async () => {
    const inputs = [' //n\\n1', '//n\\n 1,2', '// \\n1 2', '//m\\n1, 2 '];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
