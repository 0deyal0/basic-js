import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default{
  values: [],
  getLength() {
    return this.values.length;
  },
  addLink(value) {
    this.values.push(value);
    return this;
  },
  removeLink(position) {
    if (position >= 1 && position <= this.values.length)
      this.values.splice(position-1, 1);
    else 
    {
      this.values = [];
      throw Error('You can\'t remove incorrect link!');
    }

    return this;
  },
  reverseChain() {
    this.values = this.values.reverse();
    return this;
  },
  finishChain() {
    let res = [...this.values];
    this.values = [];
    return res.map(val => val === undefined  ? '( )' : `( ${val} )`).join('~~');
  }
}
