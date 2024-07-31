
let byid1 = document.querySelector('#one')
let byClass1 = document.querySelector('.two');
let byUl1 = document.querySelector('ul')
let byTagname1 = document.querySelector('h1')
let byAttr1 = document.querySelector('h1[name= "nm"]');

// retriveing values

console.log(byid1)
console.log(byClass1)
console.log(byUl1)
console.log(byTagname1)
console.log(byAttr1);

let lione = document.querySelector('li')
console.log(lione)// return 1st Element of document

let all_liElement = document.querySelectorAll('li')
console.log(all_liElement)// return node list

let allEl = document.querySelectorAll('h1[name = "nm"]');
console.log(allEl)

for(let i=0 ; i < all_liElement.length ; i++){

    if(i % 2 == 0){
 
         all_liElement[i].style.color = "orange"

    }else{

        all_liElement[i].style.color = "blue"
    }
};

