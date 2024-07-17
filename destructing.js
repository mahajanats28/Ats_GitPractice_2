//   distructing Array[] objects{}

  let arr1 = ["me","you","mine","they", "their"];
  console.log(arr1);
  
  let [a1,a2,a3,a4,a5] = arr1 ;
  
//  Extarcting values fron an Arrays  
  console.log(a1)
  console.log(a2)
  console.log(a3)
  console.log(a4)
  console.log(a5)
  
// programm 2

let fruit = ["Apple","Banana","Kiwi","Mango"];
console.log(fruit);

let [first,second,third,fourth] = fruit ; 

console.log(first);
console.log(second)
console.log(third)
console.log(fourth)

//  skipping elements from Array
let color = ['Red','Blue','Yellow',"Balck"];
  
let [c1,c2,c3]  = color ;

console.log(c1)
console.log(c2)
console.log(c3)


//            Destructing  Array []  objects {}

let arrNum = [12,14.17,18,21.50,24,] ;

let [a,b,c,d,e,f]  = arrNum

//  Extracting values from Array

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

//   nested array 

//              0   1  2    0 1   2   0  1 2
let numbers = [[12,18,25],[29,33,37],[0,4,8]];
//                  0          1         2

let  [[n1,n2,n3],[n4,n5,n6],[n7,n8,n9]] =  numbers ; 

//  Extracting values from neseted array
console.log(n1)
console.log(n2)
console.log(n4)
console.log(n6)
console.log(n7)
console.log(n8)

//   Destructing  With an Objects 

let student = {
  
         Sname     : "Omkar",
         Slastname : "Pandit",
         Srolnum   :  24 ,
         Scontact  : 9370951438 
}

//  extracting values to an Objects

let {Sname,Slastname,Srolnum,Scontact} = student

console.log(Sname)
console.log(Slastname)
console.log(Srolnum)
console.log(Scontact);


let info = {
  
    Myname     : "Arjun",
    Mylastname : "Ranawat",
    Myage      : 28,
    Mycity     : "Deharadun"
};

// You can extract values by passing custome name to properties
// Ex. Myname: mn <-- is custom name

let {Myname:mn,Mylastname:mln,Myage:age,Mycity:city} =  info ;

console.log(mn);// Arjun
console.log(mln);//  Ranawat
console.log(age);// 28
console.log(city);//  Deharadun

let teamcap = {
  
      Mumbaicap : "Rohit",
      Chenaicap : "Mahi",
      RCBcap    : "Virat",
      Delhaicap : "Rishab",
      Indiaco: "Gautam"
};

// extracting values by custom name
/// Ex. Mumbaicap :MI <---  Custom name

let {Mumbaicap:MI,Chenaicap:CSK,RCBcap:RCB,Delhaicap:DC,Indiaco:Ind} = teamcap ;

console.log(MI);//   Rohit
console.log(CSK)//   Mahi
console.log(RCB)//   Virat
console.log(DC)//    Rishab
console.log(Ind)//   Gautam

//  nested Objects

let fam_info ={
  
          firstname : "Prajakata",
          
          family: {
            
            father : "Suresh",
            mother : "Anita",
            brother : "Atul"
        }
};

console.log(fam_info);

let {firstname,family:{father,mother,brother}} = fam_info ; 

console.log(firstname)//  Prajakata
console.log(father)//  Suresh
console.log(mother)//  Anita
console.log(brother)//  Atul

