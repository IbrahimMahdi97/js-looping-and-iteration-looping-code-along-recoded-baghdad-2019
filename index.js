// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];

<<<<<<< HEAD
function writeCards(names, event) {
  let birthday =[];
  event = "surprise";
  for (let i= 0; i < names.length; i++) {
  birthday[i] = 'Thank you, '+ names[i] +', for the wonderful ' +event+' gift!';
=======
function writeCards(names) {
  let birthday =[];
  for (let i= 0; i < names.length; i++) {
   let birthday[i] = 'Thank you, '+ names[i] +', for the wonderful birthday gift!';
>>>>>>> 792e29ad76481700dececae430e34f1e10b1227a
  }
  return birthday;
}


let number = 10;
function countdown (number) {
  while (number >= 0) {
    console.log(number--);
  }
}