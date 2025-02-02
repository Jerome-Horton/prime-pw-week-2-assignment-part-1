console.log( 'js' );
// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = 'Jerome';
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = 'Horton';
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
// We can create a third variable and assign it the value 'fullName' or we can use the existing
// variables of our first and last name by concatenating '+' it in a sentence.
let fullName = firstName + ' ' + lastName  // This is called String Concatenation //
let luckyNumber = 8;
let adventurous = true; // boolean
let food = 'Liberian Food';
let pets = 2;
let friendsPets = 1;
const allowedPets = 2;
let mostPets = pets + friendsPets;
// 4 - Console log the value of `fullName`

console.log( firstName );
console.log( lastName );
console.log( fullName );
console.log( luckyNumber );
console.log( adventurous );
console.log( food );
console.log( pets );
console.log( friendsPets );
console.log( allowedPets );
console.log( mostPets );
// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.

console.log( 'My name is ' + fullName + ' ,and I think ' + luckyNumber + ' is a winner!' );

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
// *Revisit this*
// 8 - Create a variable named `food`, and set its value to a string of your favorite food

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has

// 11 - Add two pets to your `pets` variable

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
if( adventurous ){
  console.log( 'Adventures are great!' );
}
else {
  console.log( 'How about we stay home?' );
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"


if( luckyNumber === 2 && luckyNumber === true ){
  console.log( 'Roll the dice' );
  }
  else {
    console.log( 'Do not roll the dice!');
}


// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

if( pets < allowedPets ){
  console.log( 'I can have more pets' );
}

if ( pets === allowedPets) {
  console.log( 'I have enough pets');
}

if ( pets > allowedPets) {
  console.log( 'Oh no, I have too many pets!' );
}

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.

if ( mostPets >= pets && friendsPets <= mostPets ) {
  console.log('mostPets');
}


// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!

switch ( mostPets ) {
  case pets:
      console.log( 'mostPets' );
      break;
  case friendsPets:
      console.log( 'mostPets');
      break;
  case allowedPets:
      console.log( 'LeastPets');
      break;
  default:
      console.log( 'Get morePets');
}

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!

adventurous ? true : false;
