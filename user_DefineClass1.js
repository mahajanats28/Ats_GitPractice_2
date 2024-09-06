
class person {

    constructor(fn, ln, ag, ron) {

            this.firstName = fn,
            this.lastName = ln,
            this.age = ag,
            this.rollnum = ron

    }

};

let detail = new person("Arjun", "Singh", 26, 38);
console.log(detail)

let student = [

    new person("Tilak", "Varma", 24, 19),
    new person("Rinku", "Singh", 25, 32),
    new person("Ravi", "Bishnoi", 23, 21),
    new person("Shivam", "Dube", 30, 27)

]


// //  retrive values
// console.log(student[0].age)
// console.log(student[2].firstName)
// console.log(student[3].firstName)
// console.log(student[3].age)
// console.log(student[2].rollnum)
// console.log(student[1].firstName)

// print all element 

student.forEach(function(el) {

    //console.log(el)// all element
    //  console.log(el.firstName)// all firstname
    //  console.log(el.lastName)// all lastname
    //  console.log(el.age)// all  student age
    //  console.log(el.rollnum)// all student rollnum
    // console.log(el.age + " "+ el.rollnum)

});

// programm --> print fname and lname

student.forEach(function (el) {

    console.log(el.firstName + " " + el.lastName)
});

// print of allstudent avarage age

let avg_age = student.reduce(function (acc, el) {

    return acc + el.age;

}, 0);

console.log(avg_age / student.length)

// programm --> print rollnum avarage

let rolnum_avg = student.reduce(function(acc,el){

  return acc + el.rollnum ;

},0);

console.log(rolnum_avg)// age 99
console.log(rolnum_avg/ student.length);// avrage age 24.75