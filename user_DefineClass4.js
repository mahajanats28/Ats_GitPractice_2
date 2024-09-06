
// using constructer

class detail {

    constructor(fn,ln,ag,rln){

      this.first_name = fn 
      this.last_name = ln
      this.age = ag
      this.roll_num = rln

    }
};

let person = new detail("Kedar","Jadhao",20,10);

// add property

person.city = "Amravati";


// update property
person.roll_num = 9 ;
console.log(person);

// delete property
delete person.roll_num ;
console.log(person)

//programm - 2

// set property by using set() method

class deail_1 {

 setFirstname(fn){

    this.firstName = fn
 }

 setLastname(ln){

    this.lastName = ln
 }

 setAge(ag){

    this.age = ag
 }

 setContact(cn){

    this.contact = cn
 }

};

// object creation

let student_detail = new deail_1()

student_detail.setFirstname = "Neminath";
student_detail.setLastname = "Javalkar";
student_detail.setAge     =  35 ;
student_detail.setContact = 9841257626;

console.log(student_detail)


// programm - 3

// set property using set and get keyword

class detail_2 {

    set F_Name(fn){

        this.firstName = fn
    }
    get F_Name(){

        return this.firstName = fn
    }

    set L_Name(ln){

        this.lastName = ln
    }

    get L_Name(){

        return lastName = ln
    }

    set My_Age(ag){

        this.age = ag
    }
    get My_Age(){

        return age = ag
    }

    set My_Contact(cn){
        
        this.contact = cn
    }

    get My_Contact(){

        return this.contact = cn
    }
};

// object creation

let my_Detail = new detail_2()

my_Detail.F_Name = "Vihan"
my_Detail.L_Name = "Ladker"
my_Detail.My_Age = 24 ;
my_Detail.My_Contact = 7874884576 ; 

console.log(my_Detail)