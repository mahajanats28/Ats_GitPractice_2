
//  selecting Elements Using CSS Selector

//  id ="one" class = "Two"  name = "Three"

// by Tagname
let byTagName = document.querySelector('h2')

console.log(byTagName);

// by id -->#
let byID = document.querySelector('#one')
console.log(byID);

// by class -> use dot . 
let byClass = document.querySelector('.Two')
console.log(byClass);

// by att name and value -> tagname[att = 'value']

let byAttr = document.querySelector('h2[name="Three"]');
console.log(byAttr);
