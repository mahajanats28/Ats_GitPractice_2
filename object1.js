
//   Object Creation/declaration

// let object = {

//      key      :   value
//     property1 : "value1",
//     property2 : "value2"
// }

//  object does not stores value by index 

// Example 1

let My_details = {

     firstName : "Atul",  
     lastName  : "Mahajan",
     Age       :  28 ,
     RollNum   :  25 ,
     City      : "Amravti"  

}

console.log(My_details)

// CURD Opration

//  C -> Create
//  U -> Update
//  R -> Retrive
//  D -> Delete

//  to manupulate with values an objects we use notation in javascript
//  ** .dot notation and bracket notation[] **

//  Retrive values from an objects

// dot notation

console.log(My_details.firstName)//  Atul

// bracket notation

console.log(My_details['firstName'])//  Atul

// update value to an oject
 
My_details.RollNum = "38" ; // dot notation
My_details['RollNum'] = "38" ; 

console.log(My_details)

// create or Add new property to an object

My_details.ContactNo  = '8668283056' ; 

My_details['ContactNo'] = '8668283056' ; // bracket notation

console.log(My_details)

// delete an property from an object

delete My_details.RollNum ;

console.log(My_details) // RollNo property is deleted from an object

// Example 2
//  New object

let person = {

      firstName : "Gautam",
      lastName :  "Adhani",
      age :         55,
      profession :  "Business"

}

//  retrive values
console.log(person.firstName)// Gautam
console.log(person['lastName'])// Adhani

// update values
person.lastName = "Gambhir";
console.log(person)

// creat / add new property

person.city = "Delhi";
console.log(person)//  city : "Delhi" -> added

person['profession'] = "Coach of India Team"


// delete value 

delete person.age
console.log(person)

// delete person['profession']
// console.log(person)

// Example 3
// new object

let Newcar = {

     car : "Ford",
     Model : "Mustang",
     RegNo : 1248 ,
     Color : "Dark Horse"
}

console.log(Newcar)

//  retrive values

console.log(Newcar.car)
console.log(Newcar['Model'])

// update values

Newcar.Color = "German Greay";
Newcar['RegNo'] = 7218 ;

console.log(Newcar)

// add values

Newcar.pass_year = 2023;
Newcar['City']  = "Pune";

console.log(Newcar)

//  delete values 

delete Newcar.pass_year

console.log(Newcar)


//  Loop use in objects
// use only []bracket notation

for (let prop in Newcar){

    // console.log(prop)// gives all properties
     console.log(Newcar[prop])// gives values of Properties
}

// Example 4

let student = {

     sname : "Chetan",
     slastname : "sharma",
     std_in :  "5th",
}

console.log(student.slastname)// sharma
console.log(student['sname'])// chetan

// value update

student.slastname = "Wankhade";
console.log(student)

// add/ create values in object

student.RollNum = 18 ;
console.log(student)

student['Grade'] = 'A';
console.log(student)

// apply loop on object

for(let prop in student){

   //  console.log(prop)//   properties

     console.log(student[prop])// we get all values of properties
} ;

//  Example 5 

// new object

let detail = {
   
     Emp_name : "Varun",
     Emp_lname : "Patwardhan",
     Join_year : 2021
   
 };
 
 console.log(detail);
 
 //  C U R D Oprations
 
 // update 
 
 detail.Emp_name = "Vikrant";
 console.log(detail)
 
 // add / create new property
 
 detail.city = "Bangluru";
 console.log(detail)
 
 detail['Emp_id'] =  1928 ;
 console.log(detail)
 
 //   retrive value 
 
 console.log(detail.Emp_lname)
 console.log(detail['Emp_lname'])// dot notation
 
 //  delete proprties
 
 delete  detail.Emp_id  ;
 console.log(detail)
 
 //   for loop use on object using in oprator
 
 for(let prop in detail){
   
   console.log(detail[prop])
   
 }
