// Open a terminal and execute: node tree n=[number]

'use strict';

const cliArgs = process.argv.slice(2);
const args = cliArgs[0] ? cliArgs[0].split('=') : [];

if (args[0] === 'n' && typeof parseInt(args[1]) === 'number') {
  const n = parseInt(args[1]);

  for (let i = 1; i <= n; i++) {
    console.log(new Array(n - i + 1).join(' ') + new Array(i + 1).join('#'));
  }
} else {
  console.log('The n value was missing (e.g. node tree n=4)');
}
