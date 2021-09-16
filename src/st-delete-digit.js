import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  return Number(Array.from(String(n), num => Number(num)).reduce((acc, cur, ind,arr) => {
    const num = arr.filter((_, curInd) => curInd != ind);
    if (num.reduce((prev, cur) => cur+prev) > Array.from(String(acc), num => Number(num)).reduce((prev, cur) => cur+prev)){
      acc = num.join('')
    }
    return acc;
  }, 0))
}
