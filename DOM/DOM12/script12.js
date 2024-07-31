// retrive elements

let byid = document.querySelector('#one')
let byclass = document.querySelector('.two')
let by_Atrr = document.querySelector('h1[name="nm"]')
let by_tag = document.querySelector('h1')
let by_ul = document.querySelector('ul')

console.log(byid)
console.log(byclass)
console.log(by_Atrr)
console.log(by_tag)
console.log(by_ul)
// dealing with li Elements

let li1st = document.querySelector('li');
console.log(li1st)// return 1st element in document

let all_li_Ele = document.querySelectorAll('li');
console.log(all_li_Ele)// return node list[] of all el which is static

let tag_li_El = document.querySelectorAll('h1[name="nm"]')
console.log(tag_li_El)// return node list of al el[]

// for(let i = 0 ; i < all_li_Ele.length ; i++){

//    if(i % 2 == 0){

//     all_li_Ele[i].style.color = "maroon"
//    }else{

//     all_li_Ele[i].style.color = "blue"
//    }

// };

// programm 

// for(let i = 0 ; i < all_li_Ele.length ; i++){

//     console.log(all_li_Ele[i].textContent)

//     all_li_Ele[i].style.color = "orange";
// };

// loop on ul list using addEventLister Method()

by_ul.addEventListener('click', function () {

    for (let i = 0; i < all_li_Ele.length; i++) {

        console.log(all_li_Ele[i].textContent)// get all li element text
        if (i % 2 == 0) {

            all_li_Ele[i].style.color = "blue"

        } else {
            all_li_Ele[i].style.color = "yellow"
        }
    }

});

