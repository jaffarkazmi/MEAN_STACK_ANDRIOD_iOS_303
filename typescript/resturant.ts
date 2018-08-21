var count:number
class menu{
    pakistani=[ ["biryani",100],["korma",200],["haleem",200]]
    chineese=[["sushi",200],[ "shahslik", 150 ] ,["noodles",500]]
    refreshment=[["tea",20],["water",30]]

    display_menu()
    {
        console.log("PAKISTANI")
    for(var i =0 ; i<3; i++)
       { console.log(this.pakistani[i]  )
       }
       console.log("CHINEESE")
       for(var i =0 ; i<3; i++)
       { console.log(this.chineese[i]  )
       }
    
       console.log("REFRESHMENT")
       for(var i =0 ; i<2; i++)
       { console.log(this.refreshment[i]  )
       }
    }
} 
class waiter extends menu{
amount1
amount2
amount3
tot
food1= "30 minutes"
food2= "15 minutes"
    desk :number
 order=[[]]
 order_duration:number
 paki
 chin
 refres

  desk_number(n){
    this.desk=n
    count =this.desk
    console.log("=====================" +this.desk)
}

order_take(pak  , chn , ref ){
 this.paki=pak
 this.chin=chn
 this.refres=ref
 console.log(this.pakistani[this.paki][0])
 //console.log("lllllllllllllllllllllllllllll"+this.pakistani[this.paki][1])
    console.log(this.chineese[this.chin][0])
    console.log(  this.refreshment[this.refres][0])
    console.log(  "Duration is 30 minutes")
}

calculate_order()
{
    console.log( "Desk number is "+count )
    console.log(this.pakistani[this.paki][1])
    console.log(this.chineese[this.chin][1])
    console.log(  this.refreshment[this.refres][1])
this.amount1=this.pakistani[this.paki][1]
this.amount2=this.chineese[this.chin][1]
this.amount3=this.refreshment[this.refres][1]
this.tot=this.amount1+this.amount2+this.amount3

console.log("TOTAL AMOUNT: "+ this.tot)
}

}
class cashier {

    amount:number
    object: waiter;
constructor(){
   this.object = new waiter();
}
   // foo = new waiter
    print(){
        
        console.log( "Desk number is "+count )
        this.object.calculate_order()
       // console.log( this.foo.order )
        //console.log(this.amount)
    }
}

var watier_obj=new waiter
var cashr_obj= new cashier

watier_obj.display_menu()
watier_obj.desk_number(2)
console.log("Please select your order\nEnter listed numbers of your desired dish " )
console.log("your order is")
watier_obj.order_take(1,2,1)
console.log("Prices were")
watier_obj.calculate_order()

// var cashr_obj= new cashier
//cashr_obj.print()