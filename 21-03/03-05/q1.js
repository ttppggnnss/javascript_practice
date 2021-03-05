let fs = require('fs');
let input = fs.readFileSync('./i1.txt').toString().split('\n');

let count = input[0];
let array = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] !== '') {
    array.push(input[i].split(' '));
  }
}

for (let i = 0; i < array.length; i++) {
  let array1 = String(array[i][0]);
  let array2 = String(array[i][1]);

  console.log(array1, array2);
}
