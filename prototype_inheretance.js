
// prototype inheritance 

// function Detail(fn, ln, ag, rln) {

//     this.firstname = fn
//     this.lastname = ln
//     this.age = ag
//     this.rolnum = rln

//     // this.DisplayName = function () {

//     //     console.log(this.firstname + " " + this.lastname)
//     // }
// }

// let person = new Detail("Aditay", "Kirloskar", 28, 21);
// let person_1 = new Detail("Aman", "Seherawat", 21, 50);

// // retriving values
// console.log(person.firstname)
// console.log(person.lastname)
// console.log(person.age)
// console.log(person.rolnum)

// // **prototype inheritance
// // every object has one __proto__ property 
// // which is simiar to Parent.prototype

// console.log(person.__prop__ === Detail.prototype)

// Detail.prototype.DisplayName = function(){

//    console.log(this.firstname +" "+ this.lastname)

// }

// Detail.prototype.country = "India"

// person.DisplayName()

// console.log(person)
// console.log(person_1)

// console.log(person.country)

// prototype inheritance
// function constructer

function Person(fn, ln, ag) {

    this.firstname = fn
    this.lastname = ln
    this.age = ag

    // this.NameDisplay = function(){

    //     console.log(this.firstname+" "+this.lastname+" "+this.age)
    // }

};

let my_Detail = new Person("Niraj", "Chopra", 26);

console.log(my_Detail)
//my_Detail.NameDisplay()// method calling

console.log(my_Detail.__proto__ === Person.prototype);

// inherete parent properties into child using prototype -->

Person.prototype.NameDisplay = function () {

    console.log(this.firstname + ' ' + this.lastname + ' ' + this.age)
};


Person.prototype.country = "INDIA";
console.log(my_Detail.country);
console.log(Person)

//my_Detail.NameDisplay()

console.log(my_Detail.hasOwnProperty('country'));
my_Detail.NameDisplay()

//  prototype useing ES6 CLASS
// we user constructer method in ES6 CLASS

class Detail {

    constructor(f_n,l_n,age,cit){

    this.firstname = f_n
    this.lastname = l_n
    this.age = age
    this.city = cit

    }
    // we define user define methos seprated 
    // to easly inherte parent property into child

    Display_Name = function(){

        console.log(this.firstname+' '+this.lastname);
        console.log(this.age+' '+this.city);
    }
};

let new_detail = new Detail("Vinesh","Foghat",30,"Dehli");

console.log(new_detail)

new_detail.Display_Name()