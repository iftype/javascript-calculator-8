//구분자들을 관리하는 클래스
class Delimiter {
  constructor() {
    this.delimList = [',', ':'];
  }
  //해당 문자가 구분자인지 확인
  hasDelimiterString(delim) {
    return this.delimList.includes(delim);
  }
}

export default Delimiter;
