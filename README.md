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

- [ ] 커스텀 구분자를 구분자 배열에 추가 `Delimiter.addDelimiter()`
- [ ] 표현식에서 구분자를 삭제 `Delimiter.splitDelimExpression()`

### Calculator 계산기, 총 합을 구해줌

- [ ] 구분자를 제거한 숫자배열을 더 해줌 `Calculator.sumNumberList()`

---

## 👁스스로 판단한 추가 요구 사항

- 사용자의 입력

> 사용자는 입력을 실수할 수 있으며 예상되는 실수는 다음과 같다.

```

/;\n1,2,3 |❌| 기준자를 오타낸 경우
//\n1,2,3 |❌| 커스텀 구분자를 입력 안한 경우
//\n      |❌| 커스텀 구분자가 공백일 경우
```

- 커스텀 구분자의 기준

```

//**\n |❌| 숫자를 제외한 하나의 문자로만 커스텀 구분자를 만들 수 있다.
// \n  |❌| 공백은 커스텀 문자로 받을 수 없다.
//\\n  |⭕| "\"를 포함한 특수문자를 받을 수 있어야 한다
```

- 표현식 파트

> 표현식의 기준

```
//?\n1,2?3 |⭕| 기본 구분자와 커스텀 구분자는 같이 나올 수 있다
1,,,3      |❌| 구분자는 두 개 이상 연속해서 나올 수 없다.
,1,2,3,    |❌| 양수로 시작해서 양수로 끝나야한다.
```

---

[TOP🔝](#목차)
