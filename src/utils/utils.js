//안전한 정수인지 검사
export function isNumber(params) {
  return Number.isSafeInteger(Number(params));
}
