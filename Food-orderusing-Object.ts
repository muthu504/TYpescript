//need to add methods  printorder and getprice
const order={
    id:20,
    title:'Icecream',
    price:100,
    printOrder(){
        console.log(this.id+""+this.title+""+this.price)
    }
}
var getPrice=function(){ //to get price
    return getPrice;
}
const Ordersource={
    OrderId:2,
    title:"Chicken65",
    price:220
};
console.log(Ordersource)
console.log(Ordersource.price)
const Ordertarget={
    OrderId:1,
    title:"Coke",
    price:45
};
const returnedtarget=Object.assign(Ordersource,Ordertarget) //assign copies source object to target object
console.log(Ordersource); 
console.log(returnedtarget);



