const MY_FAV=7; //define MY_FAV as a const and given value as 7

MY_FAV=20; // this will throw an error Cannot assign to 'MY_FAV' because it is a constant.

console.log('my favourite number is '+MY_FAV)

const MY_FAV = 20; //Cannot redeclare  variable 'MY_FAV'

// the name MY_FAV is reserved for constant above, so this will fail too
var MY_FAV = 20;

// this throws an error too
let MY_FAV = 20;