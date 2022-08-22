import chalk from 'chalk';

import greet from './greet.js'

// call the function & print the result on the screen
const styledMessage = chalk.blue.black(greet('Xola'));
console.log(styledMessage)