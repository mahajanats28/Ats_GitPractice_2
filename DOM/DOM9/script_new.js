
// Identifying Elemnts 

let inputT = document.querySelector('input');
let button1 = document.querySelector('#one');
let ullistone = document.querySelector('ul');

console.log(inputT)
console.log(button1)
console.log(ullistone);

button1.addEventListener('click',function(){

 let FruitText = inputT.value ;
 let newlist = document.createElement('li')// create li <li></li>
 newlist.textContent = FruitText ;
 Creat_3Button(newlist);
 ullistone.appendChild(newlist)

 inputT.value = " " ;

});

// traverse child to parent and parent to child 

ullistone.addEventListener('click',function(event){

    // console.log(event.target)
    // console.log(event.target.tagName)// return tagname of element
    // console.log(event.target.className)// return class value

    if(event.target.tagName == "BUTTON"){

   if(event.target.className == "remove"){

    let li = event.target.parentElement
    let ullistone = li.parentElement
    ullistone.removeChild(li)
   }
   else if(event.target.className == "up"){
    
    let li = event.target.parentElement

    let prevli = li.previousElementSibling
    let ullistone = li.parentElement

    if(prevli){

        ullistone.insertBefore(li,prevli)
    }
   }
else if(event.target.className == "down"){

    let li = event.target.parentElement
    let nextli = li.nextElementSibling
    let ullistone = li.parentElement

    if(nextli){

        ullistone.insertBefore(nextli,li)
    }
}
}

  });

   


//  Create 3 Button --> i)Remove  ii)UP   ii)Down

function Creat_3Button(li){

let rem  = document.createElement('button')// create button

rem.textContent = "Remove";// <>Remove<>
rem.classList.add('remove');//  <btn class="remove">Remove<>
li.appendChild(rem);

let up = document.createElement('button');
up.textContent = "up";// <>UP<>
up.classList.add('up'); //  <btn class="up">UP<>
li.appendChild(up);

let down = document.createElement('button')// create button

down.textContent = "Down" ;// <>Down<>
down.classList.add('down') //  <button class='down'>Down<>
li.appendChild(down);

};