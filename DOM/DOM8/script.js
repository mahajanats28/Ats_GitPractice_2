
// Identifying Elemnts 

let ullist = document.querySelector('ul');
let buttonnew = document.querySelector('#one');
let inputnew = document.querySelector('input');

// console.log(ullistnew)
// console.log(buttonnew)
// console.log(inputnew)

buttonnew.addEventListener('click',function(){

let vegText = inputnew.value
let newlist = document.createElement('li')// created <li></li>
newlist.textContent = vegText // <li>Bringal</li> added new element ti list

createButton(newlist)
ullist.append(newlist);

 inputnew.value = " "

});

// we need to add this button


// //{/* <button class = "remove">Remove</button>
// <button class = "up">Up</button>
// <button class = "down">Down</button> */}

ullist.addEventListener('click',function(event){

// console.log(event.target)// get element
// console.log(event.target.tagName)// get element Tag
// console.log(event.target.className)// 

if(event.target.tagName == "BUTTON"){

  if(event.target.className == "remove"){

     let li = event.target.parentElement
     let ullist = li.parentElement
     ullist.removeChild(li)

  }
    else if(event.target.className == "up"){

      let li = event.target.parentElement
      let prevLi = li.previousElementSibling
      let ullist = li.parentElement
      
      if(prevLi){

        ullist.insertBefore(prevLi,li)
      }

    }
    else if(event.target.className == "down"){

      let li  = event.target.parentElement
      let nextLi = li.nextElementSibling
      let ullist = li.parentElement

      if(nextLi){

        ullist.insertBefore(li,nextLi)
      }

    }
}

});

function createButton(li){

  let r =  document.createElement("button")// create <button></button>

  r.textContent = "Remove" // crated Remove button <button>Remove</button>
  r.classList.add('remove')// <button class = "remove">Remove</button>
  li.appendChild(r)

  let u = document.createElement('button')
      u.textContent = "Up"
      u.classList.add('up')
      li.appendChild(u)

  let d = document.createElement('button')

      d.textContent = "Down"
      d.classList.add('down')
      li.appendChild(d)
};