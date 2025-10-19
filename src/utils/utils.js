//안전한 정수인지 검사
export function isNumber(params) {
  if (params === null || params === undefined || params === '') return false;
  return Number.isSafeInteger(Number(params));
}
