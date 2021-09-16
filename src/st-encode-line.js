import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (str == '') return str;
  if (str.length > 0) {
    return str.split('').reduce((acc, cur, ind, arr) => {
      const curIndex = acc.findIndex(el => el[0] == cur);
      if (curIndex != -1 && (ind == 0 || arr[ind] == arr[ind- 1])) {
        acc[curIndex][1]++;
      }
      else {
        acc.push([cur, 1])
      }
      return acc;
    }, []).map(val => (val[1] > 1 ? val.reverse().join('') : String(val[0]))).join('')
  }
  // remove line with error and write your code here
}
