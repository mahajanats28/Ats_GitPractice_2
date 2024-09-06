// programm 1
// ploymorphisam-> Many from of one things


class Humen {
  
    talk(){
      
      console.log("Hiiiii Sepian")
    }
    
  }
  
  class Duck {
    
      talk(){
        
        console.log("Quck Quck quck ")
      }
    
  }
  
  class Dog {
    
    bark(){
      
      console.log("Bhow Bhow Bhow..")
    }
  }
  
  function makesound(obj){
     
    obj.talk()
   
  }
  
  // object cretion/ creating intance
  
  let hum = new Humen()
  let duc = new Duck()
  let dug = new  Dog()
  
  makesound(hum)
  makesound(duc)
  
  // programm 2 -> Method overridding
  //    Diff class , same method ,same signature/parameter
  
  // parent class
  class WorldBank {
    
    save(){
      
      console.log("Save - World_Bank")
    }
    
    loan(){
      
      console.log("Loan - World_Bank")
    }
    
  }
  
  // sub class
  class SBI extends WorldBank{
   
  // overridding parent methods into sub class
    
    save(){
      
      console.log("save - SBI 10%")
    }
    
    loan(){
      
      console.log('loan - SBI 10%')
    }
  }
  
  // creating intance 
  
  let my_SBI = new SBI()
  let w_Bank = new WorldBank()
  
  // calling over rride mathods of parent and sub class

  my_SBI.save()// method overridee
  w_Bank.save()
  my_SBI.loan()// method overridee
  w_Bank.loan()

  //  polymorphism

// method overrding

// programm 2
class World_Bank{
  
  save(){
    
    console.log("World_Bank")
  }
  
  loan(){
    
    console.log("Loan - World_Bank")
}
}

class SBI_Bank extends World_Bank{
 
 // overrding the parent methods
 
     save(){
       
       console.log("SBI Bank")
     }
  
     loan(){
        
       console.log("Loan - SBI")
     }
}

// creating Intance of SBI_Bank

let my_SBI = new SBI_Bank();

// overidding method
my_SBI.save()
my_SBI.loan()

// creating intance of World_Bank

let my_world = new World_Bank()

my_world.save()
my_world.loan()
