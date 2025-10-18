import { HEAD_PATTERN, TAIL_PATTERN } from './constants/patternConstants.js';
class Pattern {
  //해당 문자열이 HEAD_PATTERN으로 시작하는지 확인
  static isStartHeadPattern(string) {
    return string.startsWith(HEAD_PATTERN);
  }
}
export default Pattern;
