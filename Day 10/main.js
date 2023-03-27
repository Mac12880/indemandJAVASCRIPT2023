//JS CODE
let points = 0;
let guessingGame = () => {
  return new Promise((valid, invalid) => {
  const inputNumber = Number(prompt("Enter a Number from 1 to 6: "));
  const generatedRandNo = Math.floor(Math.random() * 7);
  
  if(isNaN(inputNumber)){
    invalid(new Error("You didn't enter a number!"));
  }
  else if(inputNumber === generatedRandNo){
    console.log(`User guessed = ${inputNumber}`);
    console.log(`Random generated number = ${generatedRandNo}`);
    console.log(`You are correct!`);
    points = points + 2;
    console.log(`Your points: ${points}`);
    valid({ points: 2, generatedRandNo});
    resumeGuessingGame();
  }
  else{
    console.log(`User guessed = ${inputNumber}`);
    console.log(`Random generated number = ${generatedRandNo}`);
    console.log(`You are wrong!`);
    valid({points: 0, generatedRandNo});
    resumeGuessingGame();
  }
  });
};

let resumeGuessingGame = () => {
  return new Promise((valid, invalid) => {
  const resume = Number(prompt("Press 1 to resume game!"));
  if(resume == 1){
    valid(true);
    guessingGame();
  }
  else{
    valid(false);
    console.log("Thanks for playing!");
  }
  });
};


console.log("Guessing game!");
const wantPlay = Number(prompt("Press 1 if you want to play!"));
if(wantPlay === 1){
  guessingGame();
}
else{
  console.log("Guessing game!");
  const wantPlay = Number(prompt("Press 1 if you want to play!"));
}