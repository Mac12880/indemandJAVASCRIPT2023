//map
const fullName = [
  {
      first: "Martin",
      last: "Juan"
  },
  {
      first: "Kyle",
      last: "Reyes"
  },
  {
      first: "Aaron",
      last: "Rubio"
  },
  {
      first: "Mark",
      last: "Balala"
  },
  {
      last: "Samolde"
  },
];

const firstName = fullName.map(function(name){
  return name.first;
})

console.log(firstName);