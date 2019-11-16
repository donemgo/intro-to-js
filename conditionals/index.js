// Javascript provides us with conditional statements to ensure that we run some piece of code only when certain conditions are met.

// the first one we would be looking at is the "if" statement

const grapes = 8;

if (grapes > 9) {
  console.log('oya eat some apples');
} else if (grapes < 9) {
  console.log('oga the apples do not seem enough');
} else {
  console.log('you are playing with me abi');
}

// lets look at this example

let theNumber = Number(prompt('Pick a number'));
if (!Number.isNaN(theNumber)) {
  console.log('Your number is the square root of ' + theNumber * theNumber);
} else {
  console.log('put in a valid number');
}
// this statment would out what?????

// lets us also look another conditional, this is a conditional loop combo. the While and Do loops

// if I asked you to output all the even numbers from 0 to 12. you might be inclined to doing this.

console.log(0);
console.log(2); // and so on and so forth.

// but this is too much stress, the idea of writing programs is to make work less and not more. what we need is a way to run a piece of code multiple times in a LOOP based on some CONDITIONS. you see why i called it CONDTIONAL LOOP combo.
// so instead we could re-write our statements like so

let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}
// so here the key word WHILE creates a loop and we keep going into this loop

// let us look at probably the most important conditional statement. The FOR LOOP
// many many loops follows the construct of the while loop, so Javascript has helped our lives by providing us with a shorter way of doing this

// for(<counter> ; <counting to>; <increment counter>;) {

// }
