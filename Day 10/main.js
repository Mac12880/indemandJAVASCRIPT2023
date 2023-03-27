//JS CODE
let points = 0;
async function guessingGame() {
  return new Promise((resolve, reject) => {
  const inputNumber = Number(prompt("Enter a Number from 1 to 6: "));
  const generatedRandNo = Math.floor(Math.random() * 7);
  
  if(isNaN(inputNumber)){
    reject(new Error("You didn't enter a number!"));
  }
  else if(inputNumber === generatedRandNo){
    console.log(`User guessed = ${inputNumber}`);
    console.log(`Random generated number = ${generatedRandNo}`);
    console.log(`You are correct!`);
    points = points + 2;
    console.log(`Your points: ${points}`);
    resolve({ points: 2, generatedRandNo});
    resumeGuessingGame();
  }
  else{
    console.log(`User guessed = ${inputNumber}`);
    console.log(`Random generated number = ${generatedRandNo}`);
    console.log(`You are wrong!`);
    resolve({points: 0, generatedRandNo});
    resumeGuessingGame();
  }
  });
};

let resumeGuessingGame = () => {
  return new Promise((resolve, reject) => {
  const resume = Number(prompt("Press 0 to resume game!"));
  if(resume == 0){
    resolve(true);
    guessingGame();
  }
  else{
    reject(new Error("Thanks for playing!"));
  }
  });
};


console.log("Guessing game!");
const wantPlay = Number(prompt("Press 0 if you want to play!"));
if(wantPlay === 0){
  guessingGame();
}
else{
  console.log("Guessing game!");
  const wantPlay = Number(prompt("Press 0 if you want to play!"));
}

// let points = 0;
// let guessingGame = () => {
//   return new Promise((valid, invalid) => {
//   const inputNumber = Number(prompt("Enter a Number from 1 to 6: "));
//   const generatedRandNo = Math.floor(Math.random() * 7);
  
//   if(isNaN(inputNumber)){
//     invalid(new Error("You didn't enter a number!"));
//   }
//   else if(inputNumber === generatedRandNo){
//     console.log(`User guessed = ${inputNumber}`);
//     console.log(`Random generated number = ${generatedRandNo}`);
//     console.log(`You are correct!`);
//     points = points + 2;
//     console.log(`Your points: ${points}`);
//     valid({ points: 2, generatedRandNo});
//     resumeGuessingGame();
//   }
//   else{
//     console.log(`User guessed = ${inputNumber}`);
//     console.log(`Random generated number = ${generatedRandNo}`);
//     console.log(`You are wrong!`);
//     valid({points: 0, generatedRandNo});
//     resumeGuessingGame();
//   }
//   });
// };

// let resumeGuessingGame = () => {
//   return new Promise((valid, invalid) => {
//   const resume = Number(prompt("Press 0 to resume game!"));
//   if(resume == 0){
//     valid(true);
//     guessingGame();
//   }
//   else{
//     valid(false);
//     console.log("Thanks for playing!");
//   }
//   });
// };


// console.log("Guessing game!");
// const wantPlay = Number(prompt("Press 0 if you want to play!"));
// if(wantPlay === 0){
//   guessingGame();
// }
// else{
//   console.log("Guessing game!");
//   const wantPlay = Number(prompt("Press 0 if you want to play!"));
// }









// async function hello() {
//     return `Hello!`;
// }

// async function ohNo() {
//     throw new Error(`Oh no!`);
// }

// const sing = async() => {
//     throw new Error(`Oh no!`);
//     return `LA LA LA!`;
// }

// sing()
//     .then((data) => {
//     console.log("Promise fulfilled with: ", data);
//     })
//     .catch(err => {
//         console.log("Oh no! Promise rejected");
//         console.log(err);
//     })

// Fake Login
// const login = async (username, password) => {
//     if(!username || !password) throw 'Missing Credentials';
//     if(password === 'pass') return 'Welcome';
//     throw 'Invalid Password'
// }

// login('user','password')
//     .then(msg => {
//         console.log('Logged In');
//         console.log(msg);
//     })
//     .catch(err => {
//         console.log('Error logging in');
//         console.log(err);
//     })

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve()
//         }, delay)
//     })
// }

// // delayedColorChange('red', 1000)
// //     .then(() => delayedColorChange('orange', 1000))
// //     .then(() => delayedColorChange('yellow', 1000))
// //     .then(() => delayedColorChange('green', 1000))
// //     .then(() => delayedColorChange('blue', 1000))
// //     .then(() => delayedColorChange('indigo', 1000))
// //     .then(() => delayedColorChange('violet', 1000))

// async function rainbow() {
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000)
// }

// // rainbow().then(() => console.log("End of the rainbow."));

// async function printRainbow() {
//     await rainbow();
//     console.log("End of the rainbow.");
// }

// printRainbow();

// const fakeRequest = (url) => {
//   return new Promise((fulfill, reject) => {
//       const rand = Math.random();
//       setTimeout(() => {
//           if(rand < 0.7) {
//               fulfill(`Here is your fake data from ${url}`);
//           }
//           reject('Request Error.');
//       }, 1000);
//   })
// }

// async function makeTwoRequests() {
//   try {
//       let data1 = await fakeRequest('/page1');
//       console.log(data1);
//       let data2 = await fakeRequest('/page2');
//       console.log(data2);
//   } catch(e) {
//       console.log("Caught an error");
//       console.log("Error is: ", e);
//   }
// }
