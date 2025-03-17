
// Rest oprator --use to collect of elelment
//  spred oprator - use to segrecated all elements of array and object
let person = {

    firstname : "Abhijit",
    lastname  : " Sawant"
}

let info = {

    age : 42 ,
    city : 'Mumbai'
}

let infoupdate = {...person,...info}
console.log(infoupdate)
//{ firstname: 'Abhijit', lastname: ' Sawant', age: 42, city: 'Mumbai' }

let arrA = [10,20,30]
let arrB = [11,22,33]

let arrC = [...arrA,...arrB]
console.log(arrC)

// programm rest oprator 

let new_info = {

    fname : 'Abdul',
    lname : 'Kalam',
    age :  65,
    city :'Ernakulam'

}

// 
let {fname,...otherinfo} =  new_info
console.log(fname)// Abdul
console.log(otherinfo)//{ lname: 'Kalam', age: 65, city: 'Ernakulam' }

// programms 
// Deconstructing the array
let names =  ["Chinamy","Amol","Ganesh","Smriti"]

let [a,...b] = names
console.log(a)// Chinamy
console.log(b)//[ 'Amol', 'Ganesh', 'Smriti']

// Rest and spread oprator with object using function

let my_info = {

    firstname1 : "Atul",
    lastname1 : "Mahajan",
    age : 28,
    city : "Amravati"
}

function DisplayFullname({firstname1,lastname1,...info}){

    console.log(firstname1)
    console.log(lastname1)
    console.log(info)
}
DisplayFullname(my_info);

let detail = {

    name : 'Daljit',
    surname : "Kaur",
    age : 48 ,
    city1 : "Chandighadh"

}

function display_Details({name,surname,...otherDatail}){

    console.log(name)
    console.log(surname)
    console.log(otherDatail)
}
display_Details(detail)

// take away --> this topic 
// copy -> array or object ---> seprate memory