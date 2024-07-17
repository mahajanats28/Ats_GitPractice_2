
//             **  Topic String **

//  Creating Strings -- >

// Using Single('') or Double Quotes (" ")

let singlequote = 'Hellow World....';

let doublequote = "Welcome to India....";

console.log(singlequote)

console.log(doublequote)

console.log(typeof singlequote)//    String
console.log(typeof doublequote)//    String

//   Using Backticks  (` `)

let backticks = `Practice makes man perfect` ;

console.log(backticks);

console.log(typeof backticks)//   String

let name1 = `Atul` ;
let my_surname = `Mahajan` ;


console.log(`My first name is ${name1} and my last name is ${my_surname}`) ;


//  programm 1-> Recognization of String

//   number  +  string  -->  String
//   string  +  number  --> String
//   number  +  number    -->  number
//   string  +  string    -->  String

 let x  = 10 ;
 let y  = 5 ;
 let z  = "Welcome" ;
 
 console.log(x + y + z)// 15Welcome
 
 console.log(x + z + y)// 10welcome5
 
 console.log(z + x + y)// Welcome105
 
 let a  = 100
 let b =  200
 let c = "Hii i am there" ;
 
 
 console.log(a + b + c)// 300Hii i am there
 
 console.log(c + a + b)// Hii i am there100200
 
 console.log(b + c + a)// 200Hii i am there100
 
 console.log(c + b + a)// Hii i am there200100
 
 
 let myname = "Atul";
 let middlename = 'Suresh';
 let lastname = `Mahajan` ;
 
 console.log(typeof myname)//  string
 console.log(typeof middlename)
 console.log(typeof lastname)
 
 //  programm 2
 
 let str = "INDIA";
 
 console.log(str[1])// N
 
 for (let i = 0 ; i < str.length ; i++){
   
   console.log(str[i])
 };
 
 //  reverse for loop
 
 for (let i2 = str.length-1 ; i2 >= 0 ; i2--){
   
      console.log(str[i2])
   
 }

//   programm 3

// let My_str = "Hellow" ;

// console.log(My_str[1])//  e
// console.log(My_str.length-1)// 5 last index of String

// // for loop

// for(let i = 0 ; i < My_str.length ;  i++){
  
//   //console.log(i)//  all index
//   console.log(My_str[i])
  
// }

// //    reverse for loop

// for(let i = My_str.length-1 ; i >= 0 ; i--){
  
//     console.log(My_str[i])
  
// }

// //  while loop

// let i2 = 0
// while(i2 < My_str.length){
  
//     console.log(My_str[i2])
    
//     i2 = i2 + 1 ;
  
// };

// //   reverse while loop

// let i3 = My_str.length-1 ;

// while(i3 >= 0){
  
//     console.log(My_str[i3])
     
//     i3 =i3 - 1 ;
  
// }

