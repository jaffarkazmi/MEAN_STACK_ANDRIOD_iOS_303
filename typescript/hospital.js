var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var patient = /** @class */ (function () {
    function patient(Name, Fname, mr, appd, ni, wrd) {
        this.patient_illness = ["flu", "bp", "fever"];
        this.flu_doctor_names = ["Jeff", "Kaz", "Syed"];
        this.bp_doctor_names = ["Ali", "Kashan", "Shayan"];
        this.fever_doctor_names = ["Mushtaq", "Ashaan", "Shaqan"];
        this.barcode = 12389;
        this.patient_name = Name;
        this.patient_Fatname = Fname;
        this.mr_num = mr;
        this.appoint_date = appd;
        this.nic = ni;
        this.ward = wrd;
    }
    patient.prototype.assign_doctor = function (n) {
        console.log("Slots available are 9AM  3AM  9PM");
        if (n == 1) {
            console.log("FLU doctors:");
            console.log(this.flu_doctor_names);
            this.count = 1;
        }
        else if (n == 2) {
            console.log("BP doctors");
            console.log(this.bp_doctor_names);
            this.count = 2;
        }
        else if (n == 3) {
            console.log("FEVER doctors");
            console.log(this.fever_doctor_names);
            this.count = 3;
        }
        else
            console.log("invalid choice");
    };
    patient.prototype.displaypri = function () {
        console.log("YOUR PRIVATE NIC " + this.nic + " AND BARCODE " + this.barcode);
    };
    patient.prototype.display = function () {
        console.log("name:" + this.patient_name + " Father name:" + this.patient_Fatname + " MR number:" + this.mr_num + " Date:" + this.appoint_date + " NIC:" + this.nic + " Ward number:" + this.ward);
    };
    return patient;
}());
var billing = /** @class */ (function (_super) {
    __extends(billing, _super);
    function billing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fees = [1000, 1500, 2000];
        return _this;
    }
    billing.prototype.doctors_fees = function (id) {
        id--;
        console.log("fees for slot 9AM is 1000rs for 3AM is 1500rs for 9PM is 2000rs");
        console.log("choose slots and doctors press (1) for 1st (2) for 2nd (3) for 3rd slots");
        if (this.count == 1) {
            console.log(this.flu_doctor_names);
            console.log(this.flu_doctor_names[id]);
            id++;
            console.log("you press " + id);
            --id;
            console.log("your fees is " + this.fees[id] + "rs");
            this.saved_docname = this.flu_doctor_names[id];
            this.saved_fees = this.fees[id];
        }
        else if (this.count == 2) {
            console.log(this.bp_doctor_names);
            console.log(this.bp_doctor_names[id]);
            //id++
            console.log("you press " + id + " your fees is " + this.fees[id] + "rs");
            this.saved_docname = this.flu_doctor_names[id];
            this.saved_fees = this.fees[id];
        }
        else if (this.count == 3) {
            console.log(this.fever_doctor_names);
            console.log(this.fever_doctor_names[id]);
            //id++
            console.log("you press " + id + " your fees is " + this.fees[id] + "rs");
            this.saved_docname = this.flu_doctor_names[id];
            this.saved_fees = this.fees[id];
        }
        else
            console.log("please enter valid input");
    };
    billing.prototype.voucher = function () {
        console.log("============== VOUCHER ==========================");
        this.display();
        console.log("Doctors name: " + this.saved_docname + "\n Amount: " + this.saved_fees + "rs");
        this.displaypri();
        this.fees_option();
    };
    // display2():void
    //  {
    //      console.log("name:"+this.patient_name+"\n Father name:"+this.patient_Fatname+"\n MR number:"+this.mr_num+"\n Date:"+this.appoint_date+" NIC:"+this.nic+" Ward number:"+this.ward)
    //  }
    billing.prototype.fees_option = function () {
        console.log("Choose your payment methods PRESS 1 for ONLINE, 2 for CREDIT CARD");
    };
    return billing;
}(patient));
console.log("WELCOME");
console.log("To get appointment please enter patient's details:");
var obj3 = new billing("Jaffar", "Waqar", 123, 21.12, 42201206, 2);
//var obj1 = new patient("Jaffar", "Waqar" ,123 ,21.12, 42201206,2)
console.log("DETAILS are ");
obj3.display();
// obj1.details()
// obj1.display()
console.log("please enter your illness ");
console.log("Enter (1) for FLU ENTER (2) for BP Enter (3) for FEVER");
// obj1.assign_doctor(1)
obj3.assign_doctor(1);
obj3.doctors_fees(1);
obj3.voucher();
