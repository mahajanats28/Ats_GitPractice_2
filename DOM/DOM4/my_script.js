
let headone = document.querySelector('h1');
let buttonone = document.querySelector('button');

console.log(headone);
console.log(buttonone);

buttonone.addEventListener('click',function(){

    headone.style.color = "blue"
    headone.style.backgroundColor = "yellow"
    headone.textContent = headone.textContent.toLocaleUpperCase()

});

//headone.textContent = headone.textContent.toUpperCase()