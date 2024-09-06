// OOPS -> Sigle Inheretance

class student {

    constructor(fn, ln) {

        this.firstname = fn
        this.lastname = ln
    }

    DisplayName() {

        console.log(this.firstname + " " + this.lastname)
    }
}

class Teacher extends student {

    // hard code value 
    salary = 5000
    age = 30

    DisplayDetail() {

        console.log(this.salary + ' ' + this.age)
    }

};

let person = new Teacher("Anuj", "Rawat")

console.log(person.firstname)
console.log(person.lastname)
console.log(person.salary)
console.log(person.age)

person.DisplayDetail()
person.DisplayName()

// programm-2 Multi-level Inheretance

class GrandFather {

    constructor(fn, ln) {

        this.firstname = fn
        this.lastname = ln

    }

    Name_Display() {

        console.log(this.firstname + " " + this.lastname)
    }
}

class Father extends GrandFather {

    constructor(fn, ln, Ffn) {

        super(fn, ln)

        this.Father_Name = Ffn
    }

    Display_Fname() {

        console.log(this.Father_Name)
    }
}

class Son extends Father {

    constructor(fn, ln, Ffn, Sn) {

        super(fn, ln, Ffn)

        this.Son_Name = Sn
    }

    Display_Sname() {

        console.log(this.Son_Name)
    }

};

let personB = new Son("Vasant", "Pawar", "Avish", "Pratuysh")

console.log(personB.firstname)
console.log(personB.lastname)
console.log(personB.Father_Name)
console.log(personB.Son_Name)

personB.Name_Display()
personB.Display_Fname()
personB.Display_Sname()

// ptogramm-3 Multiple Inheretance

class Mother {

    constructor(fn, ln) {

        this.firstname = fn
        this.lastname = ln
    }

    Display_Mother() {

        console.log(this.firstname + " " + this.lastname)
    }
}

class SonA extends Mother {

    constructor(fn, ln, sname) {
        super(fn, ln)

        this.SonA_name = sname

    }

    Display_Son() {

        console.log(this.SonA_name)
    }

}


class Daughter extends Mother {

    constructor(fn, ln, Dauname) {
        super(fn, ln)

        this.Daughter_Name = Dauname
    }

    Display_Daughter() {

        console.log(this.Daughter_Name)
    }
}

let my_son = new SonA("Anita", "Mahajan", "Atul")
let my_daughter = new Daughter("Anita", "Mahajan", "Prajakta")

// my_son data retriving

console.log(my_son.firstname)
console.log(my_son.lastname)
console.log(my_son.SonA_name)
// my_daughter data retriving
console.log(my_daughter.firstname)
console.log(my_daughter.lastname)
console.log(my_daughter.Daughter_Name)

// calling methods

my_son.Display_Mother()
my_son.Display_Son()

my_daughter.Display_Mother()
my_daughter.Display_Daughter()

//  Hierarchical Inheritance

// parent class
class Mother {
  
    constructor(fn,ln){
      
      this.firstName = fn
      this.lastName = ln
      
    }
      
      DisplayName(){
        
        console.log(this.firstName+' '+this.lastName)
      }
    
  }
  
  // child class
  class Son extends Mother {
    
    constructor(fn,ln,sfn){
      
      super(fn,ln)// call to parent constructor
      this.sonName = sfn
      
    }
    
      DisplaySonName(){
        
        console.log(this.sonName+' '+this.lastName)
      }
  }
  
  // child class
  class Daughter extends Mother{
    
    constructor(fn,ln,Dfn){
      
      super(fn,ln)// call to parent constructor
      this.daughterName = Dfn
    }
      DisplayDaughterName(){
        
        console.log(this.daughterName+' '+this.lastName)
      }
  }
  
  let my_son = new Son("Aasha","Pawar","Sachin");
  
  let my_daughter =new Daughter("Aasha","Pawar","Aboli");
  
  // retriving values --> son
  console.log(my_son.firstName);
  console.log(my_son.lastName);
  console.log(my_son.sonName);
  
  my_son.DisplaySonName()
  // retriving values --> Daughter
  
  
  console.log(my_daughter.firstName)
  console.log(my_daughter.lastName)
  console.log(my_daughter.daughterName)
  
  my_daughter.DisplayDaughterName()
  