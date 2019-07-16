const bcrypt = require("bcryptjs");
// function Person(first, last, age, gender, interests) {
//   'use strict';

//   this.name = {
//     'first': first,
//     'last' : last
//   };

//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.bio = () => this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.';

//   this.greeting = () => 'Hi! I\'m ' + this.name.first + '.';

// }

// var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

// console.log(person1.name.first +' '+ person1.name.last);
// console.log(person1.age);
// console.log(person1.interests[1]);
// console.log(person1.bio());

// console.log(' ');

// //using the create() method
// var person2 = Object.create(person1);

// console.log(person2.name);
// console.log(person2.greeting());

// console.log(' ');

// console.log(Object.getPrototypeOf(person2));

// console.log(' ');

// console.log(person2.__proto__);
///////////////////////////////////////////////////////////////////

function palindromeChainLength(n) {
  var sum = 0, check = 0;
  while(n != (check = parseInt(n.toString().split('').reverse().join('')))) {
    n += check;
    sum++;
  }
  return sum;
};
/////////////////////////////////////////////////////////////////////////////

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
// function PaginationHelper(collection, itemsPerPage){
  
//   this.collection = collection;
//   this.itemsPerPage = itemsPerPage;
// }

// // returns the number of items within the entire collection
// PaginationHelper.prototype.itemCount = function() {

//   return this.collection.length;
// };

// // returns the number of pages
// PaginationHelper.prototype.pageCount = function() {
//   let count = this.collection.length;
//   let items = this.itemsPerPage;
//   let checker = count % items;
  
//  if (checker != 0 ) {
//    let firstC = Math.floor(count/items) + 1;
//    return firstC;

//  }else if(checker == 0 ){
//    let firstC = count/items;
//    return firstC;
//  }

// };

// // returns the number of items on the current page. page_index is zero based.
// // this method should return -1 for pageIndex values that are out of range
// PaginationHelper.prototype.pageItemCount = function(pageIndex) {
//       if (pageIndex < 0 || pageIndex > (this.pageCount() - 1)){return -1;} 
//     var pageArr = [];
//     var n = this.pageCount();
//     var colLen = this.itemCount();
//     var itemsPerPage = this.itemsPerPage;
//     for (var i = 0; i < n; i += 1) {
//         pageArr.push( (colLen > itemsPerPage) ? itemsPerPage : colLen);
//         colLen -= itemsPerPage;
//     }
//     return pageArr[pageIndex];
// }

// // determines what page an item is on. Zero based indexes
// // this method should return -1 for itemIndex values that are out of range
// PaginationHelper.prototype.pageIndex = function(itemIndex) {
//       if (itemIndex < 0 || itemIndex > (this.itemCount())){return -1;} 
//     var n = this.pageCount();
//     var colLen = this.itemCount();
//     if (colLen === 0){return - 1};
//     var itemsPerPage = this.itemsPerPage;
//     return itemIndex === 0 ? 0 : Math.floor(itemIndex / itemsPerPage);
// }

// var helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 9);
// helper.pageIndex();



// ///////////////////////////////////////////////////////////////////////////////////////////////////
const zeros = n => {
  let result = 0;
    for (let i = 5; i <= n; i += 5) {
        let num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }
    return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////

module.exports.fizzbuzz = function(input) {
  if (typeof input !== "number") throw new Error("Input should be a number.");
  if (input % 3 === 0 && input % 5 === 0) return "Fizzbuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
};

/////////////////////////////////////////////////////////////////////

async function hashing(password) {
   // hash password using bcrypt
   const salt = await bcrypt.genSalt(10);
   password = await bcrypt.hash(password, salt);
   return password;
}

////////////////////////////////////////////////////////////////////
module.exports.isDivisible = function(n, x, y) {
  if (n % x === 0 && n % y === 0) return true;
  return false;
}

/////////////////////////////////////////////////////////////////////
module.exports.list = function(x) {

  let nameString = '';

  if(x.length === 1){
    
    nameString += x[0].name;
    
  }else{
      x.forEach(result => {

        if(result === x[x.length-1]){
          nameString += ' & ' + result.name;

        }else if(result === x[x.length-2]){
          nameString += result.name;

        }else{
          nameString += result.name + ', ';
        }
    })
  };

  return nameString;
}

/////////////////////////////////////////////////////////////

module.exports.counterX = function(x) {

  var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
  var result = { };
    for(var i = 0; i < a.length; ++i) {
        if(!result[a[i]])
            result[a[i]] = 0;
        ++result[a[i]];
    }

  console.log(result);
  return result;
}

////////////////////////////////////////////////////////////////
module.exports = {

  zeros : zeros,
  palindromeChainLength : palindromeChainLength,
  hashing : hashing

}
