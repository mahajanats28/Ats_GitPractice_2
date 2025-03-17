
// async function Execution

// // function user_Create()

// function user_Create(){
    
//     return new Promise(function(resolve,reject){
        
//         setTimeout(function(){
            
//             resolve('Create_User')
//         },4000)
//     })
// }

// // function get_Id()

// function user_Id(){
    
//     return new Promise(function(resolve,reject){
       
//        setTimeout(function(){
           
//            resolve('get user Id')
//        })
//     },2000)
// }

// // function get_info()

// function user_Info(){
    
//     return new Promise(function(resolve,reject){
        
//         setTimeout(function(){
            
//             resolve('Get User Info')
//         })
//         },1000)
// }

//  async function get_NewInfo(){
     
//      let abc = await user_Create()
//      console.log(abc)
     
//      let xyz = await user_Id()
//      console.log(xyz)
     
//      let mnc = await user_Info()
//      console.log(mnc)
//  }
 
//  get_NewInfo()

 // prog new

 let pronew = new Promise(function(resolve,reject){

    let fname = "India";
    if(fname.length >=8){

        resolve([10,20,30])
    }
    else{

        reject('Bye')
    }
 })
 // consume

 pronew.then(function(str){

    console.log(str)
 },function(str2){

    console.log(str2)
 });