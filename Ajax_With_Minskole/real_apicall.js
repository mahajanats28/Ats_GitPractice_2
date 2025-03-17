
// programm 1 Real api call

function get_UserId(page) {

    return fetch(`https://reqres.in/api/users?page=${page}`)
        .then(function (response) {

            console.log(response)
            return response.json()
        })
        .then(function (response) {

            console.log(response.data[0].id)
            return response.data[0].id
        })

}

//Get_userId(2)

function get_SingleUser(id){

    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    }).then(function(response){

        console.log(response)
        return response.data
    })
}

function renderHTML(el) {

    document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
    document.write(`<h2>${el.id}</h2>`)
    document.write(`<h3>${el.emailmail}</h3>`)
    document.write(`<img src = ${el.avatar} >`)

}

get_UserId(1)
.then(function(id){

    return get_SingleUser(id)
}).then(function(el){

    renderHTML(el)
})