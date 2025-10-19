import { SPACE } from '../constants/constant.js';
// 안전한 정수인지 검사
export function isNumber(params) {
  if (
    params === null ||
    params === undefined ||
    params === SPACE ||
    params === ''
  )
    return false;
  return Number.isSafeInteger(Number(params));
}

// 공백이 포함된 토큰배열을 받아 조립하여 더함
// ["1"," ","2","2"," ","3"] -> 1 22 3 -> [1,,22,,3]
export function sumTokenList(tokenList) {
  return tokenList
    .join('')
    .split(SPACE)
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
}
