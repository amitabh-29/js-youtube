// primitive
// 7 types:String,number,boolean,null,undefined,Symbol
 const outside=null
 let userEmail;
 const id=Symbol('123')
 const anotherId=Symbol('123')
 const temp=null
//  symbol is unique even if the description is same
 console.log(id===anotherId);
 const bigNumber=3456735573545444
//  non primitive
// arrays,objects,functions
const heros=["thor",'spiderman','ironman']
let obj={
    name:'tony',
    age:45,
}
 console.log(obj);
 console.log(heros);
 const myFunction=function(){
console.log("Hello World");

 }
 console.log(typeof bigNumber);
 console.log(typeof myFunction);
 console.log(typeof temp);
 
 