
//               **Javascript String Practice**

let name7 = `Balkrishna` ;

console.log(name7[1])
console.log(name7[0])

// // for(let i = 0 ; i < name.length ; i++){
 
//     console.log(name[i])
  
// }

//  while loop

// let i = 0
// while(i < name.length){
//   console.log(name[i])
  
//   i = i + 1;
  
// }

//  reverse for loop

// for(let i = name.length-1 ; i >= 0 ; i--){
  
//     console.log(name[i])
  
// }

//  reverse while loop

let i2 = name7.length-1 ;
while(i2 >= 0){
  
    console.log(name7[i2])
    
    i2 = i2 - 1 ;
  
}

//  String Methods()
//  string store values by index 

let my_name = "Welcome" ;

//  charAt(pass index) Returns the character at the specified index

console.log(my_name.charAt(2))// l
console.log(my_name.charAt(4))// o

let q = my_name.charAt(1);
console.log(q)//e

let q2 = my_name.charAt(0)
console.log(q2)// W


//concat()Combines the text of two or more strings and returns a new string

let str1 = "I am learing javascript";
let str2 = " and also learing Pythone" ;

console.log(str1.concat(str2))

let str3 =  'India won the match ';
let str4 =  'by 27 run' ;

let str5 = str3.concat(str4);
console.log(str5)

// includes() Determines whether one string may be found within another string

let newstr = "Lucifer" ;
console.log(newstr.includes("fer"));// true

let q3 = newstr.includes("cif");
let q4 = newstr.includes("e")
console.log(q3)// true
console.log(q4)// true

// indexOf(pass char of index)identify index of char and return that index

let city = "Nashik";

console.log(city.indexOf("h"));//3

let q5 = city.indexOf("a")
console.log(q5)// 1

let my_str = "Hello , India..!" ;

//replace() use to replace the sentence we want to replace

console.log(my_str.replace("India","JavaScript"));
// Hello , JavaScript..!
console.log(my_str.replace("H","P"));// Pello , India..!

let q6 = my_str.replace("Hello", "I am learning");
console.log(q6)
console.log(my_str)// not mutable 

// slice()Extracts a section of a string and returns it as a new string

console.log(my_str.slice(1,5));
let q7 = my_str.slice(7,13);
console.log(q7)

// Startwith()

let new_str = "Gajanan";

let q8 = new_str.startsWith('Gaj');
let q10 = new_str.startsWith('G');
let q11 = new_str.startsWith('g');
console.log(q8)// true
console.log(q10)//true
console.log(q11)// false

// endsWith()

let q9 = new_str.endsWith("n");
let q12 = new_str.endsWith("nan")
let q13 = new_str.endsWith("N")
console.log(q9)// true
console.log(q12)// true
console.log(q13)// false

// trim()Removes whitespace from both ends of a string

let name = " Hare Krishna " ;
console.log(name)// "  Hare Krishna "
console.log(name.trim());// "Hare Krishna"
console.log(name) 

let name1 = " The beauty of nature..! ";

console.log(name1)
console.log(name1.trim());// whitespace removed

// trimStart()Removes whitespace from beginning of string

let name2 = " Jay Gajanan";
console.log(name2)//  " Jay Gajanan";
console.log(name2.trimStart())// "Jay Gajanan";

// trimEnd()Removes whitespace from the end of a string

let name3 = "Bappa Morya  ";
console.log(name3)//  "Bappa Morya  ";
console.log(name3.trimEnd())//"Bappa Morya"

//toUpperCase()convert string into uppercase

let name4 = "savriya";
console.log(name4)// savriya small letter

let m  = name4.toUpperCase()
console.log(m)// SAVRIYA capital letter

//toLowerCase()convert values into lower case of String

let name5 = "JANEFHAL";

console.log(name5)//  JANEFHAL

 let q1 = name5.toLowerCase()
 console.log(q1)//  janefhal
 
//split()Splits a String object into an array of strings by separating the string into substrings.

let name6 = "atsmahajan721@gmail.com";

console.log(name6);

let m2 =name6.split('721');
console.log(m2)