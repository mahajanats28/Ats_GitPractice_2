
// set property by using object litler

class person {

    firstname = undefined
    lastname = undefined
    age = undefined
    rollnum = undefined

    // creating Method()

    DisplayName() {

        console.log(this.firstname + " " + this.lastname)
    }

};

// object creation

let Axshar = new person()

// // retriving vlaues
// console.log(Axshar.firstname)// undefined
// console.log(Axshar.lastname)// undefined
// console.log(Axshar.age)// undefined
// console.log(Axshar.rollnum)// undefined

// // calling Method
// console.log(Axshar.DisplayName());// undefined

// setting prperty values

Axshar.firstname = "Ritesh"
Axshar.lastname = "Deshmukh"
Axshar.age = 16
Axshar.rollnum = 25

//console.log(Axshar)

// retriving values

// // retriving vlaues
console.log(Axshar.firstname)
console.log(Axshar.lastname)
console.log(Axshar.age)
console.log(Axshar.rollnum)
// calling method
Axshar.DisplayName()

// programm 2

// set property by using Construtr in object litler

class person_1 {

    constructor(fn, ln, age, rln) {

       this.firstname  = fn
       this.lastname  = ln
        this.age = age
        this.rollnum= rln
    }

    Display_Name(){

        console.log(this.firstname+" "+ this.lastname)
    }
};

let detail = new person_1();

detail.firstname = "Nikesh"
detail.lastname  = "Mahitkar"
detail.age      = 27
detail.rollnum = 21

// retriving values
console.log(detail.firstname)
console.log(detail.lastname)
console.log(detail.age)
console.log(detail.rollnum)
detail.Display_Name()

// programm - 3
// using set and get method()


class person_2 {

setFirstName(fn){

    this.firstname=fn
}

setLastName(ln){

    this.lastname=ln
}

setAge_My(ag){

this.age=ag
}

setContact_My(cn){

    this.contact=cn
}


};

// create object

let new_Detail = new person_2()

new_Detail.setFirstName="Balkrishn";
new_Detail.setLastName="Mahajan";
new_Detail.setAge_My= 86 ;
new_Detail.setContact_My = 9657598326 ;

// Retrive Value 

console.log(new_Detail)// whole object 

console.log(new_Detail.setFirstName);
console.log(new_Detail.setLastName)
console.log(new_Detail.setAge_My)
console.log(new_Detail.setContact_My)

// programm-4

// use of set and get kryword

class person_3 {

    set fName(fn){

        this.firstname=fn
    }
    get fName(){

        return firstname=fn
    }

    set lName(ln){

        this.lastname=ln
    }

    get lName(){

        return lastname=ln
    }

    set my_City(cit){
        
        this.my_contact=cit
    }

    get my_City(){

        return my_City =cit
    }
}