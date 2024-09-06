
class detail {

constructor(fn,mn,ln,ag,roln){

  this.Firstname = fn,
  this.Middlename = mn,
  this.Lastname = ln ,
  this.Age = ag,
  this.Rollnum  = roln

}
};

let person = new detail('Devansh','Gopal','Rathi',25,19)
console.log(person)

console.log(person.Firstname +" "+ person.Lastname)
console.log(person.Age)
console.log(person.Rollnum)


let student =[

   new detail("Nishant","Ram","Chaudhari",27,20),
   new detail("Sanjay","Shyam","Patil",26,24),
   new detail("Prakash","Uttam","Jadhao",24,29)

]

// print 1st naem and lastname 

student.forEach(function(el){

 console.log(el.Firstname+" "+ el.Lastname)

});

student.forEach(function(el){

    console.log(el.Age+" "+el.Rollnum)
});

let age_ave = student.reduce(function(acc,el){

  return acc + el.Age ;

},0);

console.log(age_ave)//  total of age
console.log(age_ave/ student.length);// average of age

// print roll num avarage

let avg_rln = student.reduce(function(acc,el){

  return acc + el.Rollnum
},0);

console.log(avg_rln)//73
console.log(avg_rln/student.length)// avg of rolnumer 24.33