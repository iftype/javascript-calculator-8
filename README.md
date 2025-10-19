# 자바스크립트 문자열 덧셈 계산기

<img width="1067" height="499" alt="Image" src="https://github.com/user-attachments/assets/977bca76-7274-4c57-a12c-7091ac8b1782" />

---

## 🚀기능 요구 사항

> 입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.

- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
  - 예: `"" => 0`, `"1,2" => 3`, `"1,2,3" => 6`, `"1,2:3" => 6`
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다.
  - 커스텀 구분자는 문자열 앞부분의 `"//"`와 `"\n"` 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  - 예를 들어 `"//;\n1;2;3"`과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.

---

## 입출력 요구 사항

입력

- 구분자와 양수로 구성된 문자열

출력

- 덧셈 결과

```
결과 : 6
```

실행 결과 예시

```
덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
```

---

## ✏️구현할 기능 목록

### Extractor 커스텀파트, 표현식파트 분리

- [x] 커스텀 문자열이 있는 부분을 반환 `Extractor.extractCustomPart()`
- [x] 표현식 문자열이 있는 부분을 `Extractor.extractExpressionPart()`

### Pattern 기준 확인

- [x] 첫 번째 기준자가 존재하는지 확인 `Pattern.isStartHeadPattern()`
- [x] 두 번째 기준자가 존재하는지 확인 `Pattern.hasTailPattern()`
- [x] 커스텀 구분자가 존재할 수 있는 지 확인 `Pattern.hasPatterns()`

### Validate-패턴 부분

- [x] 기준자가 정확히 입력되었는지 검사 `ValidatePattern.isStartHeadPattern()` `ValidatePattern.validTailPattern()`
- [x] 구분자가 공백인지 검사 `ValidatePattern.validIsBlank()`
- [x] 하나의 구분자만 들어왔는지 검사 `ValidatePattern.vaildIsSingle()`
- [x] 구분자가 숫자인지 검사 `ValidatePattern.validIsNumber()`

### Validate-표현식 부분

- [x] 표현식이 숫자로 시작하는지 검사 `ValidateExpression.ValidateExpression.  ValidateExpression.validIsStartNumber() `
- [x] 표현식이 숫자로 끝나는지 `ValidateExpression.  validIsEndNumber() `
- [x] 구분자를 연속해서 사용했는지 검사 `ValidateExpression.validMultipleDelim()`
- [x] 기본구분자와 커스텀 구분자만 사용했는지 검사`ValidateExpression.validIsInDelimList()`

### Delimiter 구분자, 표현식에서 구분자들을 제거해줌

- [x] 커스텀 구분자를 구분자 배열에 추가 `Delimiter.addDelimiter()`
- [x] 표현식에서 구분자를 삭제 `Delimiter.splitDelimExpression()`

### Calculator 계산기, 총 합을 구해줌

- [x] 구분자를 제거한 숫자배열을 더 해줌 `Calculator.sumNumberList()`

---

## 👁스스로 판단한 추가 요구 사항

- 사용자의 입력

> 사용자는 입력을 실수할 수 있으며 예상되는 실수는 다음과 같다.

```

/;\n1,2,3  기준자를 오타낸 경우
//\n1,2,3  커스텀 구분자를 입력 안한 경우
// \n      커스텀 구분자가 공백일 경우
```

- 커스텀 구분자의 기준

```

//**\n   숫자를 제외한 하나의 문자로만 커스텀 구분자를 만들 수 있다.
// \n    공백은 커스텀 문자로 받을 수 없다.
//\\n    "\"를 포함한 특수문자를 받을 수 있어야 한다
```

- 표현식 파트

> 표현식의 기준

```
//?\n1,2?3  기본 구분자와 커스텀 구분자는 같이 나올 수 있다
1,,,3       구분자는 두 개 이상 연속해서 나올 수 없다.
,1,2,3,     양수로 시작해서 양수로 끝나야한다.
```

---

> 아래부터는 미션 완성 이후 작성한 글입니다.

---

## 프로젝트 구조

```
src
 ┣ 📂constants            # 상수 폴더
 ┃ ┗ 📜constant.js        # 상수들을 관리하는 파일
 ┣ 📂utils                # 유틸 폴더
 ┃ ┗ 📜utils.js           # 공통 기능 함수
 ┣ 📂Validate             # 유효성 검사 모음
 ┃ ┣ 📜Validate.js             # 검사 프로세스
 ┃ ┣ 📜ValidateExpression.js   # 표현식에 대한 검증
 ┃ ┗ 📜ValidatePattern.js      # 구분부에 대한 검증
 ┣ 📜App.js               # 프로그램 실행의 시작점
 ┣ 📜Calculator.js        # 프로그램 전체 프로세스
 ┣ 📜Delimiter.js         # 구분자 관리 클래스
 ┣ 📜Extractor.js         # 문자열 추출 클래스
 ┣ 📜index.js             # 프로그램 루트
 ┗ 📜Pattern.js           # 구분부 패턴 체크
```

---

## 프로젝트 플로우

<details>
  <summary>💥클릭하면 플로우 차트가 나옵니다</summary>

```scss
┌──────────────────────────────┐
│          App.run()            │
└─────────────┬────────────────┘
              │
              ▼
┌──────────────────────────────┐
│ 사용자에게 문자열 입력 요청  │
│ Console.readLineAsync()      │
└─────────────┬────────────────┘
              │
      ┌───────┴─────────┐
      │                 │
      ▼                 ▼
┌───────────────┐   ┌───────────────┐
│  정상 입력    │   │   입력 오류    │
└──────┬────────┘   └──────┬────────┘
       │                   │
       ▼                   ▼
┌───────────────┐    ┌─────────────────────────┐
│ Calculator 생성│    │ 에러 메시지 출력        │
│ new Calculator │    │ Console.print('[ERROR]')│
└──────┬────────┘    └─────────────────────────┘
       │
       ▼
┌───────────────────────────────┐
│ calculate() 호출              │
└─────────────┬─────────────────┘
              │
              ▼
┌───────────────────────────────┐
│ 1. 커스텀 문자 파트 추출       │
│    Extractor.extractCustomPart │
│    - 숫자 처음 등장 위치까지 반환 │
└─────────────┬─────────────────┘
              │
              ▼
┌───────────────────────────────┐
│ 2. 커스텀 구분자 추출          │
│    Extractor.extractCustomDelimiter│
│    - Pattern.hasPatterns 검사 │
│        - HEAD_PATTERN로 시작?  │
│        - TAIL_PATTERN 포함?    │
│    - HEAD_PATTERN ~ TAIL_PATTERN 사이 문자열 반환 │
│    - 패턴 없으면 원래 문자열 반환 │
└─────────────┬─────────────────┘
              │
              ▼
┌───────────────────────────────┐
│ 3. Validate 수행               │
│    Validate.validate()         │
│    ┌─────────────────────────┐│
│    │ 3-1. ValidatePattern.validate() │
│    │    - validHeadPattern    ││
│    │    - validTailPattern    ││
│    │    - validIsBlank        ││
│    │    - validIsSingle       ││
│    │    - validIsNumber       ││
│    ├─────────────────────────┤│
│    │ 3-2. ValidateExpression.validate() │
│    │    - validIsStartNumber ││
│    │    - validIsEndNumber   ││
│    │    - validMultipleDelim ││
│    │    - validIsInDelimList ││
│    └─────────────────────────┘│
└─────────────┬─────────────────┘
              │
              ▼
┌───────────────────────────────┐
│ 4. 표현식 토큰 분리             │
│    delimiter.splitDelimExpression│
│    - 문자열을 한 글자씩 순회     │
│    - 구분자면 SPACE로 변환       │
└─────────────┬─────────────────┘
              │
              ▼
┌───────────────────────────────┐
│ 5. 토큰 합계 계산               │
│    sumTokenList(tokenList)    │
│    - 공백 기준으로 토큰 분리     │
│    - 숫자로 변환 후 합계 계산    │
└─────────────┬─────────────────┘
              │
              ▼
┌───────────────────────────────┐
│ 6. 결과 출력                    │
│ Console.print(`결과 : ...`)    │
└───────────────────────────────┘

```

</details>

---

## 구현 방식

### Validation

- 메소드 체이닝 `Method-Chaining` 사용

```javascript
//ValidatePattern.js
  validHeadPattern() {
    if (!Pattern.isStartHeadPattern(this.customPart))
      throw new Error('첫 번째 기준자를 잘못 입력하셨습니다.');
    return this;
  }
  validTailPattern() {
    if (!Pattern.isEndTailPattern(this.customPart))
      throw new Error('두 번째 기준자를 잘못 입력하셨습니다.');
    return this;
  }
```

위와 같은 검증 로직이 있다면 아래와 같이 사용할 수 있다.

```js
  validate() {
    this.validHeadPattern()
      .validTailPattern()
      .validIsBlank()
      .validIsSingle()
      .validIsNumber();
  }
```

자신의 타입을 반환하니 본인의 메소드를 사용 가능

---

### 구분자 배열

- 의존성 주입 `Dependency Injection` 사용

> 통칭 DI,런타임시에 관계를 동적으로 주입

```js
//Delimiter.js
class Delimiter {
  constructor() {
    this.delimList = [',', ':'];
  }
}
```

해당 구분자 클래스는 초기화시 멤버변수로 기본 구분자를 갖게 됨
하지만 다른 곳에서 `new Delimiter` 인스턴스 생성 될 때마다 멤버 변수가 초기화됨.

> 커스텀 구분자를 추가한 배열을 넘기는 것이 목적

```js
//Calculator.js
new Validate({
  customDelimPart,
  expressionPart,
  delimiter: this.delimiter,
}).validate();
```

인스턴스를 가지고 있는 객체로 주입하면
다른 클래스에서 `Delimiter`를 사용가능하게 됨

```js
//Validate.js
import Delimiter from '../Delimiter.js';

class Validate {
  constructor({ expressionPart, customDelimPart, delimiter }) {
    this.expressionPart = expressionPart;
    this.customDelimPart = customDelimPart;
    this.delimiter = delimiter;
  }
}
```

구조 분해 할당 `Destructuring assignment` 사용하면
순서에 상관없이 매개변수에 담기 가능

```js
describe('테스트 DI', () => {
  const 접근하고싶은인스턴스 = new 접근하고싶은객체();
  test('에러발생 테스트', () => {
    const 테스트대상 = new 테스트함수(params, 접근하고싶은인스턴스);
    expect(() => 테스트대상.테스트함수()).toThrow(에러);
  });
});
```

테스트도 위와 같이 인스턴스를 넘겨서 테스트 진행해야한다

---

### 표현식 검증

- 꼼수

```js
//Delimiter.js
  구분자로_표현식_나눔(string) {
    return string
      .split('')
      .map((token) =>
      (구분자_안에_있는가?(token)? " " : token));
  }
```

```yaml
입력: ',1,22,?,3,'
출력: [' ', '1', ' ', '2', '2', ' ', '?', ' ', '3', ' ']
```

구분자 배열로 숫자가 아닌 것들에 대해서 공백을 만들면,

1. 허락되지 않은 구분자를 찾아낼 수 있다
2. 양 끝이 문자인지 확인 가능하다
3. 구분자가 연속으로 나오는지 확인 가능하다`join("").includes("  ")`
4. 두 자릿 수 이상의 수도 계산이 가능하다 `join("").split(" ")`
5. 한 자리의 모든 특수문자`-` `\\`를 해결 할 수 있다

하지만

1. 두 자리 이상의 구분자를 받을 수 없다
2. 구분자가 이스케이프 시퀀스인 경우를 해결할 수 없다
3. 구분자가 공백인 경우를 해결할 수 없다

---

😥코드 리뷰 와주신 분들 감사합니다 [올라가기🙇‍♂️](#자바스크립트-문자열-덧셈-계산기)
