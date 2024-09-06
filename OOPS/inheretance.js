
//   javascript OOPS Concet --> Inheretance
// Accquaring parent properties into child Reference variable

// programm-1 
// i) Single level Inheretance

class student {

    firstname = "Vedant"
    lastname = "Mahalle"
    age = 45

}

class teacher extends student {

    salary = 50000
    city = "Nagpur"
}


let detail = new teacher()

console.log(detail.firstname)
console.log(detail.lastname)
console.log(detail.age)
console.log(detail.city)
console.log(detail.salary)


// Programm -2
// i) Single level Inheretance -> using Constructor
class student_1 {

    constructor(fn, ln, ag) {

        this.fname = fn
        this.lname = ln
        this.age = ag
    }

    DisplayName() {

        console.log(this.fname + ' ' + this.lname)
    }

}

class Teacher_1 extends student_1 {

    // set Hardcode value 
    T_salary = 60000

    DisplaySalary() {

        console.log(this.T_salary)
    }

};

// set values at time of object creation -> Constructor

let Teacher_Deatil = new Teacher_1("Sanjay", "Deshmuk", 48)

console.log(Teacher_Deatil.fname)
console.log(Teacher_Deatil.lname)
console.log(Teacher_Deatil.age)
console.log(Teacher_Deatil.T_salary)

// Calling Mthods()

Teacher_Deatil.DisplayName()
Teacher_Deatil.DisplaySalary()

// programm-3

// paraent class
class My_Detail {

    constructor(fn, ln) {

        this.Fname = fn
        this.Lname = ln

    }

    My_Display() {

        console.log(this.Fname + ' ' + this.Lname)
    }
}

//  Chlid class accuaring parent properties

class Detail extends My_Detail {

    age = 28

    Display_Age() { 
      
      console.log(this.age)
    }
}

// object creation

let person = new Detail("Jatin", "Sapru");

// Rertiving values
console.log(person.Fname)
console.log(person.Lname)
console.log(person.age)

// calling mthods()

person.My_Display()
person.Display_Age()