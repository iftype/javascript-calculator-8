import { HEAD_PATTERN, TAIL_PATTERN } from './constants/patternConstants.js';

class Pattern {
  // 문자열이 HEAD_PATTERN으로 시작하는지 확인
  static isStartHeadPattern(string) {
    return string.startsWith(HEAD_PATTERN);
  }

  // 문자열에 TAIL_PATTERN을 포함하는지 확인
  static hasTailPattern(string) {
    return string.includes(TAIL_PATTERN);
  }

  // 문자열이 TAIL_PATTERN 끝나는지 확인
  static isEndTailPattern(string) {
    return string.endsWith(TAIL_PATTERN);
  }

  // 문자열에 구분자가 존재할 수 있는지 확인
  static hasPatterns(string) {
    return this.isStartHeadPattern(string) && this.hasTailPattern(string);
  }
}
export default Pattern;
