const age = 12;

// if (age >= 20){
//     console.log('vote daw');
// }
// else{
//     console.log('ghumaw')
// }

//////////////////ternary operator

// age >= 18 ? console.log('vote daw') : console.log('ghumaw');
// const gu = (age >= 18 ? 'vote daw' : 'nacho');
// console.log(gu)

let price = 4000;
const isLeader = false;


// console.log(price)

price = !isLeader ? (price>=1000 ? price / 2 : 0)  : price + 100;
console.log(price)