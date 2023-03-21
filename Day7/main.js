// practice array.reduced

// const animes = [
//   {
//     title: "Naruto",
//     score: 100
//   },
//   {
//     title: "Capeta",
//     score: 98
//   },
//   {
//     title: "Hunter X Hunter",
//     score: 95
//   },
//   {
//     title: "Flame of Recca",
//     score: 90
//   }
// ];

// const bestAnime = animes.reduce((highest, score) => {
//   return (score.score > highest.score) ? score : highest;
// }, animes[0]);
// console.log(bestAnime)

//Default Parameter and Spread Operator #1

const sum = (x = 5, y = 10) => {
  return x + y;
};
console.log(sum());
console.log(sum(5));
console.log(sum(10,10));