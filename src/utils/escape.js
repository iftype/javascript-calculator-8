import { ESCAPE_MAP } from '../constants/constant.js';

// \으로 시작하면 ESCAPE_MAP에 있는 값이랑 매칭함
// 단일 \\는 건들지않음     \\ => \\ 그래야 나중에 SPACE로 만들수있음
export function convertEscapes(str) {
  if (typeof str !== 'string') return;
  return str.replace(/\\(.)/g, (_, ch) => {
    if (ch === '\\') return '\\';
    if (ESCAPE_MAP[ch] !== undefined) return ESCAPE_MAP[ch];
    return '\\' + ch;
  });
}
