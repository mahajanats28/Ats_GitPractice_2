
//  polymorphism

//  programm 1

// class Human {
  
//   talk(){
    
//     console.log("Hiii Humen")
//   }
// }

// class Duck {
  
//   talk(){
    
//     console.log("quack quack..!")
//   }
// }

// class Dog {
  
//   bark(){
    
//     console.log("Bhow Bhow...!")
//   }
// }

// function call_talk(obj){
     
//     obj.talk()
// }

// //  creation Human intance
// let aa = new Human();

// call_talk(aa)

// // creation ANIMAL intance

// let animalone= new Duck()

// call_talk(animalone)

// // creation of Dog intance

// let animal_dog = new Dog()

// we call the dog object methdod

//  programm 2 -> solving that error in this programm

class Humen{
  
    talk(){
      
      console.log('Hi Homosepein')
    }
  }
  
  class Duck{
    
    talk(){
      
      console.log('quck quckk...!')
    }
  }
  
  class Dog{
    
    bark(){
      
      console.log("Bhow Bhow Bhow...!")
    }
  }
  
  function call_talk(obj){
    
    if(typeof obj.talk === 'function' ){
      
      obj.talk()
    }else if(typeof obj.bark === 'function'){
      
        obj.bark()
    }
    
  }
  
  // creation intance of all class
  
  let man = new Humen()
  let animal_1 = new Duck()
  let animal_2 = new Dog()
  
  call_talk(man)
  call_talk(animal_1)
  call_talk(animal_2)
  
  // programm 3 
  
  class Humen1{
    
    talk(){
      
      console.log('Hi Homosepein')
    }
  }
  
  class Duck1{
    
    talk(){
      
      console.log('quck quckk...!')
    }
  }
  
  class Dog1{
    
    bark(){
      
      console.log("Bhow Bhow Bhow...!")
    }
  }
  
  function make_sound(obj){
    
       if(typeof obj.talk === 'function'){
         
         obj.talk()
       } else if (typeof obj.bark === 'function'){
         
         obj.bark()
       }
  }
  
  let a = new Humen1()
  let b = new Duck1()
  let c = new Dog1()
  
  make_sound(a)
  make_sound(b)
  make_sound(c)