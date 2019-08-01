const myEmitter = require('events');

// const readLine = require("readline");
// const os = require("os");
// const fs = require("fs");
// const path = require("path");


// ////////////////////////////////
// const r8 = readLine.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// r8.question("Who are you? \n", input => {
//   console.log(input.trim());
//   r8.close();
// });

// r8.on("close", () => {
//   console.log("closed for the day!");
// });

// //////////////////////////////////
// console.log(os.release());

// //////////////////////////////////

// fs.writeFile("util/checkers.txt", "How are you doing?", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Created");
//   }
// });

// ///////////////////////////////////
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));


async function nama () {

  const boss = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve(console.log('Bosiet'));
    }, 2000);
  });

  await boss;

  console.log('House guests');
}

nama();

/////////////////////////////////////////

let gamer = {
  code: 12,
  name: 'Jenny'
}

const {code, name} = gamer;

function bean(a, b) {
  return code + a + b;
}

// let arr = [1, 2, 3]

let bound = bean.bind(gamer);
console.log(bound(1, 2));
