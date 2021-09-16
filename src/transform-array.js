import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function isCommand(elem) {
  return ['--discard-next', '--discard-prev', '--double-next', '--double-prev'].includes(elem);
}
export default function transform(arr) {
  console.log('arr:'+arr)
  if (!Array.isArray(arr)) throw Error('\'arr\' parameter must be an instance of the Array!');
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (isCommand(element)) {
      switch(element) {
        case '--discard-next':
          if (i + 1 != arr.length) {
            i++;
          }
          break;
        case '--discard-prev':
          if (res.length > 0) {
            if (i < 2 || arr[i-2] != '--discard-next') {
              res.pop();
            }
          }
          break;
        case '--double-next':
          if (i + 1 != arr.length) {
            i++;
            res.push(arr[i], arr[i]);
          }
          break;
          
        case '--double-prev':
          if (res.length > 0  && (i < 2 || arr[i-2] != '--discard-next')) {
            res.push(res[res.length-1]);
          }
          break;
      }
    }
    else {
      res.push(element);
    }
    
  }

  return res;

}
