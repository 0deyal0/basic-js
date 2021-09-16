import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const A_CODE = 65;
const Z_CODE = 90;
export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.isReverse = !direct;
  }

  crypt(message, key, isDecode = false) {
    if (!(message && key))
    {
      throw Error('Incorrect arguments!');
    }
    const keyCodes = key.toUpperCase().split('').map(val => val.charCodeAt());
    const res = message.toUpperCase().split('').reduce((acc, cur, ind, arr) => {
      const curCode = cur.charCodeAt();
      const spaceFixInd = ind - message.substring(0, ind).split(' ').length + 1;
      let encCode = curCode;
      if (isDecode) {
        encCode = encCode - (keyCodes[(spaceFixInd >= keyCodes.length ? spaceFixInd % keyCodes.length : spaceFixInd)] - A_CODE);
        encCode = encCode < A_CODE ? Z_CODE - A_CODE + encCode + 1 : encCode;
      }
      else {
        encCode = encCode + keyCodes[(spaceFixInd >= keyCodes.length ? spaceFixInd % keyCodes.length : spaceFixInd) ] - A_CODE;
        encCode = encCode > Z_CODE ? A_CODE + encCode % Z_CODE - 1: encCode;
      }
      acc += curCode >= A_CODE && curCode <= Z_CODE ? String.fromCharCode(encCode) : String.fromCharCode(curCode);
      return acc;
    }, '')
    
    return this.isReverse ? res.split('').reverse().join('') : res;
  }

  encrypt(message, key) {

    return this.crypt(message, key);

  }
  decrypt(message, key) {
    return  this.crypt(message, key, true);
  }
}
