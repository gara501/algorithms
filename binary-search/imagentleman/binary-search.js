'use strict';

const cliArgs = process.argv.slice(2);
const args = cliArgs[0] ? cliArgs[0].split('=') : [];

const generator = (length, max) => [...new Array(length)].
  map((_, i) => Math.round(Math.random() * max));
  
const dumbSearch = (array, numberToFind) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === numberToFind) {
      return true;
    }
  }
  
  return false;
};

const binarySearch = (array, numberToFind) => {
  let start;
  let middle;
  let end;
  let found = false;
  let startTime = new Date();

  array.sort((a, b) => a - b);

  console.log('Sorting Elaped Time:', (new Date() - startTime) + 'ms');

  startTime = new Date();

  start = 0;
  end = array.length - 1;
  
  while(end - start !== 1) {
    if (numberToFind < array[start] ||
      numberToFind > array[end]) {
      found = false;
      break;
    }
    
    middle = Math.round((end - start) / 2 + start);

    if (array[start] === numberToFind ||
      array[middle] === numberToFind) {
      found = true;
      break;
    }

    if (numberToFind > array[middle]) {
      start = middle;
    } else {
      end = middle;
    }
  }

  console.log('Binary Search Elapsed Time:', (new Date() - startTime) + 'ms');

  return found;
};

if (args[0] === 'length' && typeof parseInt(args[1]) === 'number') {
  const length = parseInt(args[1]);
  const max = length + 1;
  const numberToFind = Math.round(Math.random() * max);

  let startTime = new Date();

  let array = generator(length, max);

  console.log('\nGenerating Array of Length ' + length +
    ' Elapsed Time:', (new Date() - startTime) + 'ms\n');

  startTime = new Date();

  console.log(numberToFind, 'was found?', dumbSearch(array, numberToFind));

  console.log('Dumb Search Elapsed Time:', (new Date() - startTime) + 'ms\n');

  startTime = new Date();

  console.log(numberToFind, 'was found?', binarySearch(array, numberToFind));

  console.log('Binary Search Total Elapsed Time:', (new Date() - startTime) + 'ms\n');
} else {
  console.log('The array length value was missing (e.g. node binary-search length=4)');
}
