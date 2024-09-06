// OOPS Concept -> Inheretance
// programm- 1

// class Student {

//     firstname = 'Suresh'
//     lastname = "Mahajan"
//     age = 65

// }

// class Teacher extends Student {

//     occupetion = "Retired Govt Officer"

// }


// let person = new Teacher()

// console.log(person.firstname)
// console.log(person.lastname)
// console.log(person.age)
// console.log(person.occupetion)

// //programm-2 Constructor use in Parent class

// class Student_1 {

//     constructor(fn, ln) {

//         this.firstname = fn
//         this.lastname = ln
//     }

//     DiplayName() {

//         console.log(this.firstname + " " + this.lastname)
//     }
// }

// class Teacher_1 extends Student_1 {

//     salary = 50000
//     age = 55

//     DiplayAge() {

//         console.log(this.age)
//     }

// };

// let Stu_Detail = new Teacher_1("Anita", "Mahajan", 55)

// console.log(Stu_Detail.salary)
// console.log(Stu_Detail.age)
// console.log(Stu_Detail.firstname)
// console.log(Stu_Detail.lastname)

// // calling method

// Stu_Detail.DiplayAge()
// Stu_Detail.DiplayName()

// // programm-3 Constructor in parent and child class

// class Student2 {

//     Constructor(fn, ln) {

//         this.firstname = fn
//         this.lastname = ln
//     }

//     My_Names() {

//         console.log(this.firstname + ' ' + this.lastname)
//     }
// }

// class Teacher2 extends Student2 {

//     Constructor(fn, ln, age) {
//         super(fn, ln)
//         this.age = age

//     }
//     My_Age() {

//         console.log(this.age)
//     }

// };

// // set properties at the time of object creation

// let My_detail = new Teacher2("Kanchan", "Mahajan", 24)

// // retriving values
// console.log(My_detail.firstname)
// console.log(My_detail.lastname)
// console.log(My_detail.age)

// // calling methods()

// My_detail.DiplayName()
// My_detail.My_Age()

// programm-4 
// Multi-Level Inheretance

class Grandfather {
    
    constructor(fn,ln){
        
        this.firstName = fn
        this.lastName = ln
    }
    
    Display_GFname(){
        
        console.log(this.firstName+" "+this.lastName)
    }
}

class Father extends Grandfather{
    
    constructor(fn,ln,F_name){
      
      super(fn,ln)
      
      this.father_name = F_name
        
    }
     Display_Fathername(){
         
         console.log(this.father_name)
     }
    
}

class Son extends Father{
    
    constructor(fn,ln,F_name,S_Name,S_ag){
        
        super(fn,ln,F_name)
        
        this.son_name = S_Name
        this.age = S_ag
    }
    
    Display_Son_Detail(){
        
        console.log(this.son_name+" "+this.age)
    }
    
}

// we have pass five properties value in object

let detail = new Son("Balkrishna","Mahajan","Suresh","Atul",28)

console.log(detail.firstName)
console.log(detail.lastName)
console.log(detail.father_name)
console.log(detail.son_name)
console.log(detail.age)

// calling Mthods()

detail.Display_GFname()
detail.Display_Fathername()
detail.Display_Son_Detail()