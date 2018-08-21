class patient {

    public patient_name:string
    public patient_Fatname:string
    private mr_num:number
    public appoint_date:number
    private nic:number
    public ward:number
    public patient_illness=["flu", "bp", "fever"]
    public flu_doctor_names=["Jeff", "Kaz", "Syed"]
    public bp_doctor_names=["Ali", "Kashan", "Shayan"]
    public fever_doctor_names=["Mushtaq", "Ashaan", "Shaqan"]
    private barcode=12389

    public count:number

constructor(Name:string, Fname:string, mr:number, appd:number ,ni:number, wrd:number  ){
    this.patient_name=Name
    this.patient_Fatname=Fname
    this.mr_num=mr
    this.appoint_date=appd
    this.nic=ni
    this.ward=wrd
}

assign_doctor( n :number)
{
    console.log("Slots available are 9AM  3AM  9PM")
if (n == 1)
{     console.log("FLU doctors:")
console.log(this.flu_doctor_names)
 this.count=1
}
else if(n==2)
{console.log("BP doctors")
console.log(this.bp_doctor_names)
this.count=2
}
else if(n==3)
{console.log("FEVER doctors")
console.log(this.fever_doctor_names)
this.count=3
}
else 
console.log("invalid choice")
}
 displaypri ()
{
console.log("YOUR PRIVATE NIC "+this.nic+" AND BARCODE "+this.barcode ) ;
}

 display():void
 {
     console.log("name:"+this.patient_name+" Father name:"+this.patient_Fatname+" MR number:"+this.mr_num+" Date:"+this.appoint_date+" NIC:"+this.nic+" Ward number:"+this.ward)
 }
// get details():any
// {
// return this.patient_name+" "+this.patient_Fatname+" "+this.mr_num+" "+this.appoint_date+" "+this.nic+" "+this.ward
// }
}
class billing extends patient{
  
 fees=[1000 ,1500,2000]
public saved_docname:string
public saved_fees:number
doctors_fees(id :number){
    id--
console.log("fees for slot 9AM is 1000rs for 3AM is 1500rs for 9PM is 2000rs")
console.log("choose slots and doctors press (1) for 1st (2) for 2nd (3) for 3rd slots")
if (this.count==1)
{console.log(this.flu_doctor_names)


        console.log(this.flu_doctor_names[id])
        id++
        console.log("you press "+ id)
        --id
        console.log("your fees is "+ this.fees[id]+"rs")
        this.saved_docname=this.flu_doctor_names[id]
        this.saved_fees=this.fees[id]
}
else if(this.count==2)
{console.log(this.bp_doctor_names)

    console.log(this.bp_doctor_names[id])
    //id++
    console.log("you press "+id+" your fees is "+this.fees[id]+"rs" )
    this.saved_docname=this.flu_doctor_names[id]
        this.saved_fees=this.fees[id]
}
else if(this.count==3)
{
console.log(this.fever_doctor_names)

console.log(this.fever_doctor_names[id])
//id++
console.log("you press "+id+" your fees is "+this.fees[id]+"rs")
this.saved_docname=this.flu_doctor_names[id]
        this.saved_fees=this.fees[id]
}
else console.log("please enter valid input")
 
}
voucher(){
    console.log("============== VOUCHER ==========================")
    this.display()
    console.log("Doctors name: "+this.saved_docname+"\n Amount: "+this.saved_fees+"rs" )
    this.displaypri()
    this.fees_option()

}
// display2():void
//  {
//      console.log("name:"+this.patient_name+"\n Father name:"+this.patient_Fatname+"\n MR number:"+this.mr_num+"\n Date:"+this.appoint_date+" NIC:"+this.nic+" Ward number:"+this.ward)
//  }

fees_option(){
     console.log("Choose your payment methods PRESS 1 for ONLINE, 2 for CREDIT CARD")
}
}




console.log("WELCOME")
console.log("To get appointment please enter patient's details:")
var obj3 =new billing("Jaffar", "Waqar" ,123 ,21.12, 42201206,2)
//var obj1 = new patient("Jaffar", "Waqar" ,123 ,21.12, 42201206,2)
console.log("DETAILS are ")
obj3.display()
// obj1.details()
// obj1.display()
console.log("please enter your illness ")
console.log("Enter (1) for FLU ENTER (2) for BP Enter (3) for FEVER")
// obj1.assign_doctor(1)




obj3.assign_doctor(1)
obj3.doctors_fees(1)
obj3.voucher()
