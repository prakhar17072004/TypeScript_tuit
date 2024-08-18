
// let age:number =34;
// if(age<50)
//  age+=10;

// console.log(age);

// let user:[number,string]=[1,'prakhar'];
// user.push(1);
// const enum Size {Small=5,Medium,Large};
// let mySize =Size.Medium;
// console.log(mySize);
//funtion define
// let a:number=23;
// let b:string="hello";
// let c:boolean=false;
// let f:string="hello";
// let k:string="hello";
// let g:string="hello";
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(f);
// console.log(g);


// let message:string="hello,typescript";
// let fullName:string="Prakhar";
// let lastname:string="Mishra";
// let myName:string= fullName +" "+ lastname;
// console.log(myName);
// let computedValue:number = Math.sqrt(23);

// let mail:string="please mail me if you want to send me";
// console.log(mail);
// let maillength =mail.length;
// console.log(maillength);
// console.log(message.length);
// console.log(fullName.length);
// console.log(lastname.length);
// console.log(myName.length);
// console.log(computedValue);

//18/08/2024//

// let myNameIsPrakhar:boolean=true;
// let myLastNameIsMishra:boolean=true;
// console.log(myNameIsPrakhar);
// console.log(myLastNameIsMishra);

// //function//
// function isEven(a:number):boolean{
//  if(a%2===0){
//     return true;
//  }else{
//     return false;
//  }

//  }
// console.log(isEven(5));
function isDivisibleBy4and8(a:number):boolean{
    if(a/4===0 && a/8===0){
       return true;
    }else{
       return false;
    }
   
   }
   console.log(isDivisibleBy4and8(5));

   let maxValue=Number.MAX_SAFE_INTEGER;
   console.log(maxValue);
   var maxNum = BigInt("9007199254740991");
   let maxNum1 = BigInt("9007199254740991");
   let sum = maxNum + maxNum1;
   let diff = maxNum - maxNum1;
   let product= maxNum*maxNum1;
   let divide =maxNum/maxNum1;
   let reminder = maxNum%maxNum1;
   console.log(product);
   console.log(reminder);
   console.log(divide);

   console.log(sum);
   console.log(diff);
   console.log(maxNum);
   console.log(maxNum1);
   console.log(maxNum+ " "+maxNum1);

   //unknown//

   let num:unknown;
    num=10;
    num="prakhar";
    // num=false;
    console.log(num);
    if(typeof num==="boolean"){
        console.log(num);
    }else{
     console.log("hello");
    }
//funtion//

 function nameUser(name:string,id:number){
  
  
  console.log(`welcome my name is ${name} and id is ${id}`);
  


}
nameUser("Prakhar",5);
//fat arroew function //
const user=(name:string,id:number):string=>{
  
  
    return`welcome my name is ${name} and id is ${id}`;
    
  
  
  }
let yellow= user("Prakhar",78);

console.log(yellow);

const isPalindrom=(palin:string):boolean=>{
    let palindrom = palin.split("").reverse().join("");
    return palindrom===palin;

}
let a=isPalindrom("121");
console.log(a)
