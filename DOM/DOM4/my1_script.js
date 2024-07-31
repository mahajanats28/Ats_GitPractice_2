
let headtwo = document.querySelector('h1');
let buttontwo = document.querySelector('button');

console.log(headtwo);
console.log(buttontwo);

buttontwo.addEventListener('click',function(){

 headtwo.style.color = "red"
 headtwo.style.backgroundColor = "green"

 headtwo.textContent = headtwo.textContent.toUpperCase();

});