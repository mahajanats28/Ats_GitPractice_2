
 //            ** STRING **
 
 let my_string = "String Practice";
 console.log(my_string);//    "String Practice"
 
 let Str = "I am learning String";
 console.log(Str);
 console.log(typeof (Str));
 
 //   for loop on String -> 
 
 for(let i = 0 ; i <= Str.length-1 ; i++){
   
     console.log(Str[i]);
   
 };
 
 
 //  reverse loop
 
 for(let i = Str.length-1 ; i >= 0 ; i--){
   
    console.log(Str[i]);
   
 };
 
 let my_str = "Life is Beautiful..!";
 // while loop
 
 let i2 = 0 ;
 
 while(i2 <= my_str.length-1 ){
   
    console.log(my_str[i2])
    
    i2 = i2 + 1 ;
  
 };
 
 let  j = my_str.length-1;
 while(j >= 0 ){
   
   console.log(my_str[j]);
   
   j = j - 1 ;
   
 };
 
 let string = "Television";
 
 console.log(string[0]);
 
// ** Recognization of String **
 
 // String + Number -> String 
 // Number + String -> String
 // String + String -> String
//  Number + Number -> Number
 
 let x = 8 ;
 let y = 100 ; 
 let str1 = "God";
 
 console.log(str1 + x + y)//  God8100
 console.log(x + str1 + y )// 8God100
 console.log(x + y + str1)// 108God
 console.log(y + str1 + x)// 100God8
 
 let new_str = `Art of Living`;

//  charAt() pass index return elemnet chareter 
 console.log(new_str.charAt(7));// L
 
//includes() 
console.log(new_str.includes('Art'))// true

//concat()

let arr1 = 'Lots of Love  ';
let arr2 = "Plenty of Love";

let arr3 = arr1.concat(arr2); 
console.log(arr3);

new_str = `Art of Living`;

// indexOf()pass chareter of element
console.log(new_str.indexOf('L'));// 7

// replace()
let q6 = arr2.replace("Love","Water");
console.log(q6);

console.log(new_str.replace("Living","Artist"));

// startWith()

let q7 = new_str.startsWith("Art");
console.log(q7);

console.log(new_str.startsWith('A'));

//  endsWith()

let q8 = new_str.endsWith("Living")
console.log(q8);

console.log(new_str.endsWith('ing'));

// trim() trimstart()  trimend()

// trim()
let country = "State of America     ";
console.log(country)
console.log(country.trim());

// trimstart()
console.log(country);
console.log(country.trimStart());

// trimEnd()
console.log(country)
console.log(country.trimEnd());

//  to UpperCase() toLowerCase()

let str2 = "Love is Blind..!";

// toUpperCase()

console.log(str2.toUpperCase());
console.log(str2);

// toLowerCase()
console.log(str2.toLowerCase());

// split()use to splite String to an Array[]
// ** split() its return Array[] == join[] its return string **

let partes = "mahajanatul92@gmail.com";

let subpart = partes.split('92');// return array[]
console.log(subpart);

let subpart2 = partes.split('@');// retrun array[]
console.log(subpart2)

console.log(partes.split('mahajan'))// return Array[]