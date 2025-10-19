import { SPACE } from './constants/constant.js';

// 구분자들을 관리하는 클래스
// 싱글톤 적용, 커스텀 구분자가 초기화되는 현상 때문
class Delimiter {
  constructor() {
    this.delimList = [',', ':'];
  }

  // 해당 문자가 구분자인지 확인
  hasDelimiterString(delim) {
    return this.delimList.includes(delim);
  }

  // 구분자 추가
  addDelimiter(delim) {
    this.delimList.push(delim);
  }

  // 표현식에 있는 기호들 중 구분자를 찾아 공백으로 만들어줌
  // 공백으로 만든 다음 유효성 검사 할 생각
  splitDelimExpression(string) {
    return string
      .split('')
      .map((token) => (this.hasDelimiterString(token) ? SPACE : token));
  }
}

export default Delimiter;
