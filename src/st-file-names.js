import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  return names.reduce((acc, val, ind, arr) => {
    if (acc.includes(`${val}`)){
      let k = acc.filter(curVal => curVal == val || curVal.match(`${val}\\(\\d+\\)$`) != null)
                   .reduce((acc, redVal) => {
                     const match = redVal == val ? '0' : redVal.match(/\(\d+\)$/)?.[0] || '0';
                     return Math.max(match.substring(1, match.length-1), acc);
                   }, 0);
      k++;
      acc.push(`${val}(${k})`);
    }
    else {
      acc.push(val)
    }
    return acc;
  }, [])
}
