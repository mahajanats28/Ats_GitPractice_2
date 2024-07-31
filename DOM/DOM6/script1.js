
// idententtfying Elements

let nameHead = document.querySelector('h1');
let inputT  = document.querySelector('input');
let my_Button = document.querySelector('button');


my_Button.addEventListener('click',function(){

     let colorText = inputT.value 
     nameHead.style.color = colorText

     inputT.value = "  "

});