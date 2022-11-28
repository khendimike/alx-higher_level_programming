#!/usr/bin/node
/* prints x C is 
Where x is the first argument of the script
If the first argument t be converted to an integer,
Missing number of 
*/

const lang = 'C is fun';

if (isNaN(process.argv[2])) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < parseInt(process.argv[2]); i++) {
    console.log(lang);
  }
} 
