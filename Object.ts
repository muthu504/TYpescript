//need to add methods  printorder and getprice
const order={
    id:10,
    title:'juice',
    price:10,
    printOrder(){
        console.log(this.id+""+this.title+""+this.price)
    }
}
var getPrice=function(){ //to get price
    return getPrice;
}
const Ordersource={
    OrderId:1,
    title:"pizza",
    price:200
};
console.log(Ordersource)
console.log(Ordersource.price)
const Ordertarget={
    OrderId:2,
    title:"Burger",
    price:100
};
const returnedtarget=Object.assign(Ordersource,Ordertarget) //assign copies source object to target object
console.log(Ordersource); 
console.log(returnedtarget);



