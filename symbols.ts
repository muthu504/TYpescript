/**
 * 1.	Symbols: Write a class that defines next() method to return next number from 
 * Fibonacci series. The class will have a private attributes ‘previousNo’ & ‘currentNo’.
 */

 class Fibo{
    #previousNo=Symbol();
    #currentNo=Symbol();
    constructor(){
       this.#previousNo=0;
       this.#currentNo=1;
    }
    next(){
       
        let nxt=Symbol();
        nxt = this.#previousNo+this.#currentNo;
        this.#previousNo=this.#currentNo;
        this.#currentNo=nxt;
       
        return nxt;
    }
}

let obj =new Fibo();
console.log(obj.next());
