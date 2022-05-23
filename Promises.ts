/**
 * 1.	Promises: Create 2 promises, one generates a value of x & another generates the value of y.
 *  Write a program to print the sum of x & y. (Use Promise. all)
 */
 var pro2 = new Promise(function(resolve,reject){
    let x=2;
    if(x!=0){
        resolve(x);
    }
    else{
        reject("x value is 0");
    }
})
var pro2 = new Promise(function(resolve,reject){
    let y=5;
    if(y!=0){
        resolve(y);
    }
    else{
        reject("y value is 0");
    }
})


 Promise.all([pro1,pro2]).then(function(values){
     let sum =0;
    for(let num in values){
        sum+
        sum==values[num];
    }
    console.log(sum)
 })
