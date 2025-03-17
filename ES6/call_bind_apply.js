
//  call() , bind() and apply()

// use of call() method

let Person1 = {

    Fname : "Aniket",
    Lname : "Wankhade",
    DisplayName : function(city, country){

        return this.Fname +" "+ this.Lname+" "+this.city+" "+ this.country 
    }
}

//Person1.DisplayName()

let Person2 = {

    Fname : "Mayur",
    Lname : "Kashikar"
}

// call() comma seprated  arguments
console.log(Person1.DisplayName.call(Person2,"Amravati","India"))

// // apply() pass argument into an array[]
// Person1.DisplayName.apply(Person2,["Amravati","India"])

// bind() return a function

let result = Person1.DisplayName.bind(Person2,'Amravati',"India")
console.log(result)// return a function
console.log(result())// calling that function
