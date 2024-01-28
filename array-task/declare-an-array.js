const fruits = ['apple', 'mango', 'lichi', 'kathal', 'peyara'];
console.log(fruits[2]);
fruits[1] = ' jambura';
console.log(fruits)



const tourist = ['sajek', 'coxs bazar', 'rangamati'];
tourist.push('jaflong');
tourist.push('balagong', 'baikkarbill');
tourist.pop();
console.log(tourist);


const books = ['html book', 'css book', 'javascript book'];
// books.pop();
// if (books.includes('javascript book')){
//     console.log('book is included');
// }
// else{
//     console.log('book are not found')
// }

const result = (books.includes('javascript book')) ? 'book is included' : 'book are not found';
console.log(result)



const numbers = [];
// console.log (Array.isArray(numbers));
const r = Array.isArray(numbers) ? 'it is a array' : 'it is not a array';
console.log(r);



const num = [1, 6, 8];
const fndz = ['arman', 'azad'];
const boli = [true, false];

console.log(num);
console.log(fndz);
console.log(num.concat(fndz, boli));
