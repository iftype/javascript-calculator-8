import Pattern from './Pattern.js';
import { HEAD_PATTERN, TAIL_PATTERN } from './constants/patternConstants.js';
import { isNumber } from './utils/Utils.js';

class Extractor {
  //처음 숫자를 만나는 인덱스를 리턴
  static indexOfNumber(string) {
    return string.split('').findIndex((e) => isNumber(e));
  }

  //숫자를 만나는 곳을 찾아 첫 부분부터 잘라낸다, 만약 숫자를 찾아내지 못한다면 원래 문자열을 리턴한다
  static extractCustomPart(string) {
    const findNum = this.indexOfNumber(string);
    if (findNum === -1) return string;
    return string.slice(0, findNum);
  }

  //커스텀파트를 탐색하여 HEAD_PATTERN이 끝나는 지점부터 TAIL_PATTERN 까지의 문자열을 가져온다
  //하지만 문자열의 시작부터 숫자를 만나는 지점까지 기준자가 둘다 없다면 원래 문자열을 가져온다
  //커스텀 문자가 없을 수 있기 때문
  static extractCustomDelimiter(customPart) {
    if (!Pattern.hasPatterns(customPart)) return customPart;
    const headIndex = customPart.indexOf(HEAD_PATTERN) + HEAD_PATTERN.length;
    const tailIndex = customPart.lastIndexOf(TAIL_PATTERN);
    return customPart.slice(headIndex, tailIndex);
  }

  //숫자를 만나는 곳을 찾아 숫자부분 부터 끝까지 잘라낸다.
  //숫자를 찾지 못했다면 받은 문자를 리턴한다
  static extractExpressionPart(string) {
    const findNum = this.indexOfNumber(string);
    if (findNum === -1) return string;
    return string.slice(findNum);
  }
}

export default Extractor;
