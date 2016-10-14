// Open a terminal and execute: node matrix-sum rows=[number] columns=[number]

'use strict';

const cliArgs = process.argv.slice(2);
const firstArgs = cliArgs[0] ? cliArgs[0].split('=') : [];
const secondArgs = cliArgs[1] ? cliArgs[1].split('=') : [];

const findMax2by2Matrix = function(array) {
  let maxValues = [];
  let maxIndexes = [];

  for (let i = 0; i < 4; i++) {
    maxValues[i] = array[i]
    maxIndexes[i] = i;
    
    for (let j = i + 1 ; j < array.length; j++) {
      if (array[j] > maxValues[i] &&
          maxIndexes.indexOf(j) === -1) {
        maxValues[i] = array[j];
        maxIndexes[i] = j;
      }
    }
  }

  return maxValues;
};

const rowGenerator = (length, max) => [...new Array(length)].
  map((_, i) => Math.round(Math.random() * max));

const maxInteger = 999999;
let keanu = [];

if ((firstArgs[0] === 'rows' || firstArgs[0] === 'columns') &&
     typeof parseInt(firstArgs[1]) === 'number' &&
    (secondArgs[0] === 'rows' || secondArgs[0] === 'columns') &&
     typeof parseInt(secondArgs[1]) === 'number') {
  const fistKey = firstArgs[0];
  const secondKey = secondArgs[0];
  let params = {};
  
  params[firstArgs[0]] = parseInt(firstArgs[1]);
  params[secondArgs[0]] = parseInt(secondArgs[1]);

  for (let i = 0; i < params['rows']; i++) {
    keanu.push(rowGenerator(params['columns'], maxInteger));
  }

  console.log('\nGenerated Matrix:', keanu);

  console.log('\nThe max sub matrix is:', findMax2by2Matrix(
    keanu.reduce((first, second) => first.concat(second))), '\n');
} else {
  console.log('The rows and columns values are missing ' +
    '(e.g. node matrix-sum rows=4 columns=3)');
}
