
class greet {

   public greeter: string
    private ssn: number =333
   
    constructor( name:string){
        this.greeter =name

    }
    get message() :string{
        return "You are awesome "+this.greeter
    }
    get ssnValue():number{
return this.ssn
    }
   // private gin: string ="jk"


}
class gift extends greet {
    gifttype:string
    // constructor (greeter:string )
    //  {
    //     super(greeter)

    //  }
     get gifts() :string {
return this.greeter+ "We have a cool gift for you today" 
    }


    class Car { 
   //field 
   engine:string; 
   
   //constructor 
   constructor(engine:string) { 
      this.engine = engine 
   }  
   
   //function 
   disp():void { 
      console.log("Function displays Engine is  :   "+this.engine) 
   } 
} 

//create an object 
var obj = new Car("XXSY1")

//access the field 
console.log("Reading attribute value Engine as :  "+obj.engine)  

//access the function
obj.disp()
    

    // constructor (greeter:string )
    // {
    //     super(greeter)

    // }
    
}
var obj = new greet ("jaffar");
console.log(obj.message)
var obj2 = new gift("kaz")
console.log(obj2.gifts)

