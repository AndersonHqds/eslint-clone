const text = 'abc123' + 'cde9982';
const neverReasigned = {};
neverReasigned.name = 'Anderson Henrique';

let toBeReasigned = {};
toBeReasigned = { name: 'Ana' };
toBeReasigned.name = 1;
toBeReasigned = 0;
toBeReasigned = { name: 'Ana' };
// text='123';
const result = text.split(',').map(letter => {
  return letter.toUpperCase();
}).join('.');

console.log(result);