// object litral

 let my_Detail = {

    firstname : "Jatin",
    lastname  : "Turak",
    Age :      25 ,
    City :    "Washim"

 };
 console.log(my_Detail)


 let my_Detail1 = {

    firstname1 : "Sachin",
    lastname1 : "Lachure",
    Age1 :      29 ,
    City1 :    "Akola"
 };

console.log(my_Detail1)

// ABOVE 2 object we can see properties repeted 
//  to avoide repitition of properties
//  we create user define class/Object


class person {
  
    fname = undefined
    lname = undefined
    age =  undefined
    city = undefined
  }
  
  let kanchan = new person()
  
  console.log(kanchan)
  
  kanchan.fname = "Kanchan"
  kanchan.lname = "Mahajan"
  kanchan.age =  24
  kanchan.city  = "Indore"
  
  console.log(kanchan)
  
  //   ** use Constructor in  user define object
  
  class person1 {
    
    constructor(fn,ln,ag,cit){
      
      this.fname = fn ,
      this.lname = ln,
      this.age = ag,
      this.city = cit
      
    }
    
  }
  
  let krushna = new person1("krushna","Awchar",28,"Beed");
  
  console.log(krushna)
  
  // update value 
  krushna.fname = "Aniket"
  
  
  // add / create property and value
  krushna.Education = "BE";
  
  // delete property from Object
  delete krushna.city 
  console.log(krushna)// deleted city property from object
  
  