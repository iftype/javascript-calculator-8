import { HEAD_PATTERN, TAIL_PATTERN } from './constants/patternConstants.js';
class Pattern {
  //문자열이 HEAD_PATTERN으로 시작하는지 확인
  static isStartHeadPattern(string) {
    return string.startsWith(HEAD_PATTERN);
  }
  //문자열에 TAIL_PATTERN을 포함하는지 확인
  static hasTailPattern(string) {
    return string.includes(TAIL_PATTERN);
  }
}
export default Pattern;
