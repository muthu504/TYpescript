/**
 * 7.	De-structuring assignment:
a.	Suppose there is a javascript array with 4 elements. Print the value of 3rd element 
using array matching.
b.	Create an organization object having attributes name, address. Write a program to 
retrieve pin code of an address using object deep matching.
 */
var names = ["alpha", "beta", "gamma", "delta"];
var [firstelement,secondelement,thirdelement,fourthelement]= names;
console.log(thirdelement);


//Ans b.

var organization ={
    name:"Tom",
    address:{
        city:"Bangalore",
        state:"Karnataka",
        pincode:563221 
    }
}

const {address:{city:city1,state:state1,pincode:pincode1}}=organization;

console.log(pincode1);
