// identifying element 

let inputtag = document.querySelector('input');
let button = document.querySelector('#one');
let ullist = document.querySelector('ul');

// accessing elements
console.log(inputtag);
console.log(button);
console.log(ullist);

button.addEventListener('click', function () {

    let channl = inputtag.value

    let newch = document.createElement('li')

    newch.textContent = channl;

    buttonCREATE(newch);
    ullist.appendChild(newch)

    inputtag.value = " ";

});

// traverse parent to child and child to parent to reach specific element

ullist.addEventListener('click', function (event) {

    if (event.target.tagName == "BUTTON") {

        if (event.target.className == 'remove') {

            let li = event.target.parentElement
            let ullist = li.parentElement

            ullist.removeChild(li)
        }
        else if (event.target.className == "up") {

            let li = event.target.parentElement
            let prevli = li.previousElementSibling
            let ullist = li.parentElement

            if (prevli) {

                ullist.insertBefore(li,prevli)
            }
        }
        else if (event.target.className == 'down') {

            let li = event.target.parentElement
            let nextli = li.nextElementSibling
            let ullist = li.parentElement

            if (nextli) {

                ullist.insertBefore(nextli, li)
            }

        }
    }

});

// writing function for adding 3 button Remove, Up ,Down

function buttonCREATE(li) {

    let r = document.createElement('button');// <btn><btn>

    r.textContent = "Remove";// <btn>Remove</btn>
    r.classList.add('remove')
    li.appendChild(r);

    let u = document.createElement('button');
    u.textContent = 'Up';
    u.classList.add('up');
    li.appendChild(u)

    let d = document.createElement('button');
    d.textContent = 'Down';
    d.classList.add('down');
    li.appendChild(d);
};
