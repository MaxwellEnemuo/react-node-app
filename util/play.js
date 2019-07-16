(function XO(str) {
  var x = 0, o = 0;
  
  str = str.toLowerCase();
  str.split('').forEach(m => {
    'x' == m ? x++ : 'o' == m ? o++ : 0;
  });
  
  return x === o ? true : false;   
})('ooxk')

/**
 * Your job is to create a calculator which evaluates expressions in Reverse Polish notation.
For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.
For your convenience, the input is formatted such that a space is provided between every token.
Empty expression should evaluate to 0.
Valid operations are +, -, *, /.
You may assume that there won't be exceptional situations (like stack underflow or division by zero).
 */
const obj = {
  '+': (b, a) => a + b,
  '-': (b, a) => a - b,
  '*': (b, a) => a * b,
  '/': (b, a) => a / b,
}

const calculate = expression => {
  if (expression == '') return 0
  let result = []
  expression.split(' ').forEach(op => result.push(obj[op] ? obj[op](result.pop(), result.pop()) : Number(op)))
  return result.pop()
}

/////////////////////////////////
const numberToOrdinal = c => {

  let n = c.toString().split('');
  
  if(c === 0){
    return 0;

  }else if(n[n.length - 1] == 1 && c != 11 && c != 111){
    return n.join('') + 'st';

  }else if(n[n.length - 1] == 2 && c != 12 && c != 112){
    return n.join('') + 'nd';

  }else if(n[n.length - 1] == 3 && c != 13 && c != 113){
    return n.join('') + 'rd';

  }else{
    return n.join('') + 'th';
  }
}

numberToOrdinal(21);

///////////////////////////////////////
const maskify = creditCard => {

  let ck = creditCard.split('');
  ck.splice(1);
  const cc = creditCard.slice(1, -4).replace(/[0-9]/g, "#") + creditCard.slice(-4);

 return ck + cc;
}

maskify("4556-3646-0793-5616");

///////////////////////////////////
/**
 * A pangram is a sentence that contains every single letter of the alphabet at least once. 
 * For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
   Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//     return string.indexOf(x) !== -1;
//   });
// }

// isPangram('The quick brown fox jumps over the lazy dog.');

//////////////////////////////

// function sumArray(arr) {

//   let pp = arr.sort((a, b) => a - b).slice(1,-1);
//   return pp.reduce((prev, curr) => prev + curr);

//   // var text = 0;
//   // let pp = arr.sort((a, b) => a - b);

//   // for (let i = 0; i < pp.length; i++) {
//   //   if(i !== 0 && i !== pp.lastIndexOf(pp[pp.length -1])){
//   //     text += pp[i];
//   //   }
//   // }
//   // return text;
// }

// sumArray([ 6, 2, 1, 8, 10 ]);
//////////////////////////////////

// const highAndLow = numbers => {
//   numbers = numbers.split(' ').map(Number);
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);

//   // var arr = numbers.split(' ').sort(function(a, b) { return a - b });
//   // return arr[arr.length -1] + ' ' + arr[0];
// }

// highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");

//////////////////////////////////
/**
 * Given an integral number, 
 * determine if it's a square number:
 */

// var isSquare = function(n){
//   const result = Math.sqrt(n)
//   return Number.isInteger(result) && Math.pow(result, 2) === n ? true : false; 
// };

// isSquare();

////////////////////////////////////
// for (var a = 0; a < 3; a++) {

//  ((a) => {
//     setTimeout(() => {
//       console.log(a);
//     }, 2000);
//   })(a);

//  function jane(a){
//     setImmediate(() => {
//       console.log(a);
//     }, 2000);
//   }
  
//   jane(a);
  
// }

//////////////////////////////////////////////////

// let post = (...element) => console.log(element);
// post(check, 44, 99);

// let[js, js1, ...rest] = check;
// console.log(js, js1, rest[0], rest[1]);

///////////////////////////////////////////////

// let post = (name, greet='Hi') => console.log(`${greet} ${name}`);
// post('James', 'Shut up');

// function game(base, age) {
//   this.base = base;
//   this.age = age;
// }

/////////////////////////////////////////

// game.prototype.toll = function () {
//  let pail = this.base +' '+ this.age;
//  console.log(pail);
// }

// let cax = new game('hey', 'bae');
// cax.toll();

// console.log([...new Set(check)]);

////////////////////////////////////////

// let profile = {

// }

// Object.create(profile);

// profile.name = 'dave';

// console.log(profile);

/////////////////////////////////////

