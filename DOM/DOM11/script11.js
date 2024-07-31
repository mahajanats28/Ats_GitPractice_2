// identifying elements


// user action perfromed by users --->

// click, dblclick, mousein, mouseover, mouseout

// why JavaScript ???
// to retrive Element
// to update Element
// to create Element
// to delete Element

//    retriving elements
//h1 id="one" class="two" name="nm"

let byid = document.querySelector('#one')
let byClass = document.querySelector('.two')
let byul = document.querySelector('ul')
let byattr = document.querySelector('h1[name = "nm"]')
let byTagname = document.querySelector('h1')

console.log(byid)
console.log(byClass)
console.log(byul)
console.log(byattr)
console.log(byTagname)

// is used to select the first <li> element in the document.
//  return 1st li element of document 
// **or null if element is not exist in li

let lione =document.querySelector('li')
console.log(lione)

// is used to select all <li> elements in the document
//  return Node list []

let allliElement = document.querySelectorAll('li')
console.log(allliElement);

// its return tagName and its Value
let all_li = document.querySelectorAll('h1[name="nm"]')
console.log(all_li)

for(let i = 0 ; i < allliElement.length ; i++){

if(i % 2 == 0){

    allliElement[i].style.color = "blue" ;
}else{

    allliElement[i].style.color = "yellow";
}

}