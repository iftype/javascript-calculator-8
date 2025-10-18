import Pattern from './Pattern.js';
import { HEAD_PATTERN, TAIL_PATTERN } from './constants/patternConstants.js';
class Extractor {
  //해당 element의 타입을 Number타입으로 바꾸고 안전한 정수인지 확인, 공백이라면 false를 출력한다
  static isNumber(element) {
    if (element.trim() === '') return false;
    return Number.isSafeInteger(Number(element));
  }
  //처음 숫자를 만나는 인덱스를 리턴
  static indexOfNumber(string) {
    return string.split('').findIndex((e) => this.isNumber(e));
  }
}

export default Extractor;
