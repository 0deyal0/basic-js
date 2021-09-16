import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  return matrix.map((valRow, indRow, arrRow) => {
    return valRow.map((valCol, indCol) =>{
      if (indRow > 0 && arrRow[indRow-1][indCol] == 0){
        return 0;
      } 
      else {
        return valCol;
      }
    });
  }).reduce((acc, val) => acc+=val.reduce((acc, val) => acc + Number(val), 0 ), 0);
}
