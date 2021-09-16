import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let parsedOptions = parseOptions(options);
  if (parsedOptions == null) return str;
  let addition = parsedOptions.additionRepeatTimes != 0 ?
          (new Array(parsedOptions.additionRepeatTimes)).fill(parsedOptions.addition).join(parsedOptions.additionSeparator) : '';
            
   return (new Array(parsedOptions.repeatTimes)).fill(String(str)+addition).join(parsedOptions.separator);
  
}

function parseOptions(options)
{
  let resOptions = {}
  resOptions.repeatTimes = 'repeatTimes' in options && options.repeatTimes !== undefined ? options.repeatTimes : 1;
  resOptions.separator = 'separator' in options && options.separator !== undefined ? String(options.separator) : '+';
  resOptions.addition = 'addition' in options && options.addition !== undefined ? String(options.addition) : '';
  resOptions.additionSeparator = 'additionSeparator' in options && options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';
  resOptions.additionRepeatTimes = 'additionRepeatTimes' in options && options.additionRepeatTimes !== undefined ? 
                                      options.additionRepeatTimes : 1;
  
  return resOptions;
}
