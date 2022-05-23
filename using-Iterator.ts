/**
 * 2.	Iterators: Write a program that returns the next Armstrong number after 
 * calling NextArmstrong() method.
 */

const  listArmStrong=[407,971,90,370,1634, 8208, 9474.153];
const iterator = listArmStrong[Symbol.iterator]();
function getNextArmstrong(){
    
    return iterator.next().value;
}
console.log(NextArmstrong());
console.log(NextArmstrong());
console.log(NextArmstrong());
