
// programm- 1

//   objection creation add the time of property declaration

class person {

  constructor(fn, ln, ag, rn) {

    this.f_Name = fn,
      this.l_Name = ln,
      this.age = ag,
      this.roll_No = rn

  }
};

// Objectject created method()

let chinmay = Object.create({})

console.log(chinmay)

chinmay.firstname = "Chinamy"
chinmay.Lastname = "Deshpande"
chinmay.Age = 35
chinmay.City = 'pune'

console.log(chinmay)

chinmay.DisplayName = function () {

  console.log(this.Firstname + ' ' + this.Lastname)

};
chinmay.DisplayName()

// Object created method

let detail = Object create({})

detail.F_name = "Shirsha"
detail.l_name = "Shivhare"
detail.age = 10

console.log(detail)

detail.Name_Display() = function () {

  console.log(this.F_name + ' ' + this.l_name)
};

detail.Name_Display()


//  user define objection creation

let atul = new person("Atul", "Mahajan", 28, 19)

console.log(atul);

//  create new value
atul.city = "Amrvati";
console.log(atul)

//  update value
atul.city = "Karanja lad";
console.log(atul)// city value is updated 

//  delete properties 
delete atul.age
console.log(atul)//  age pro is deleted from exsitng class/object

//  its consider default peoperties in amit object
let amit = new person()
console.log(amit)// it wil print dafault class

// programm-2

class PersonA {
  // properties
  constructor(fn, ln, ag, rn) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn
  }

  displayName() {
    console.log(this.firstName + " " + this.lastName)
  }
}

let chinmayB = new PersonA("chinmay", "deshpande", 23, 44)
console.log(chinmayB.firstName)
console.log(chinmayB.lastName)
console.log(chinmayB.age)
console.log(chinmayB.rollNo)

chinmayB.displayName()// method

// programm 3

// setting properties using set() and get() Method

class personB {

  setFirstName(fn) {

    this.firstname = fn
  }

  setLastName(ln) {

    this.lastName = ln
  }

  setAge(ag) {

    this.age = ag
  }

  setRollNum(rn) {

    this.rollno = rn
  }

};

let atul_new = new personB()

console.log(atul_new)// return blank object

atul_new.setFirstName("Ajinkay");
console.log(atul_new)//  { firstname: 'Ajinkay' } added to object

atul_new.setLastName("Mahajan")
atul_new.setAge(25)
atul_new.setRollNum(108)

console.log(atul_new)

//  programm- 4

//  Set and Get keyword use
// setting Property using set and get keyword

class personC {

  set Fname(fn) {

    this.firstname = fn

  }

  get Fname() {

    return this.firstname = fn
  }

  set Lname(ln) {

    this.lastName = ln
  }

  get Lname() {

    return lastName = ln

  }

  set Age(ag) {

    this.age = ag
  }

  get Age() {

    return age = ag
  }

  set RollNum(rn) {

    this.rollnum = rn
  }

  get RollNum() {

    return rollnum = rn
  }

};

let kabir = new personC()

//  setting properties 
kabir.Fname = "Kabir";
kabir.Lname = "Mahajan"
kabir.Age = 25;
kabir.RollNum = 10;

console.log(kabir)

// programm 5

//  programm --> useing set and get keyword
// set properties 

class personD {

  set fname(fn) {

    this.firstName = fn
  }
  get fname() {

    return this.firstName = fn
  }

  set lname(ln) {

    this.lastName = ln
  }
  get lname() {

    return lastName = ln
  }
}

let prajakta = new personD()

//  setting properties 
prajakta.fname = "Prajakta"
prajakta.lname = "Mahajan"

console.log(prajakta)

// Object created method()

let chinmay = Object.create({})

console.log(chinmay)

chinmay.firstname = "Chinamy"
chinmay.Lastname = "Deshpande"
chinmay.Age = 35
chinmay.City = 'pune'

console.log(chinmay)

chinmay.DisplayName = function () {

  console.log(this.Firstname + ' ' + this.Lastname)

};
chinmay.DisplayName()

// programm -4
// Object created method

let detail = Object.create({})

detail.F_name = "Shirsha"
detail.l_name = "Shivhare"
detail.age = 10

console.log(detail)

detail.Name_Display = function () {

  console.log(this.F_name + ' ' + this.l_name)
};

detail.Name_Display()