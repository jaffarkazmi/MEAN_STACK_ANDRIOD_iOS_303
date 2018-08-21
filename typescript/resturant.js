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
var count;
var menu = /** @class */ (function () {
    function menu() {
        this.pakistani = [["biryani", 100], ["korma", 200], ["haleem", 200]];
        this.chineese = [["sushi", 200], ["shahslik", 150], ["noodles", 500]];
        this.refreshment = [["tea", 20], ["water", 30]];
    }
    menu.prototype.display_menu = function () {
        console.log("PAKISTANI");
        for (var i = 0; i < 3; i++) {
            console.log(this.pakistani[i]);
        }
        console.log("CHINEESE");
        for (var i = 0; i < 3; i++) {
            console.log(this.chineese[i]);
        }
        console.log("REFRESHMENT");
        for (var i = 0; i < 2; i++) {
            console.log(this.refreshment[i]);
        }
    };
    return menu;
}());
var waiter = /** @class */ (function (_super) {
    __extends(waiter, _super);
    function waiter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.food1 = "30 minutes";
        _this.food2 = "15 minutes";
        _this.order = [[]];
        return _this;
    }
    waiter.prototype.desk_number = function (n) {
        this.desk = n;
        count = this.desk;
        console.log("=====================" + this.desk);
    };
    waiter.prototype.order_take = function (pak, chn, ref) {
        this.paki = pak;
        this.chin = chn;
        this.refres = ref;
        console.log(this.pakistani[this.paki][0]);
        //console.log("lllllllllllllllllllllllllllll"+this.pakistani[this.paki][1])
        console.log(this.chineese[this.chin][0]);
        console.log(this.refreshment[this.refres][0]);
        console.log("Duration is 30 minutes");
    };
    waiter.prototype.calculate_order = function () {
        console.log("Desk number is " + count);
        console.log(this.pakistani[this.paki][1]);
        console.log(this.chineese[this.chin][1]);
        console.log(this.refreshment[this.refres][1]);
        this.amount1 = this.pakistani[this.paki][1];
        this.amount2 = this.chineese[this.chin][1];
        this.amount3 = this.refreshment[this.refres][1];
        this.tot = this.amount1 + this.amount2 + this.amount3;
        console.log("TOTAL AMOUNT: " + this.tot);
    };
    return waiter;
}(menu));
var cashier = /** @class */ (function () {
    function cashier() {
        this.object = new waiter();
    }
    // foo = new waiter
    cashier.prototype.print = function () {
        console.log("Desk number is " + count);
        this.object.calculate_order();
        // console.log( this.foo.order )
        //console.log(this.amount)
    };
    return cashier;
}());
var watier_obj = new waiter;
var cashr_obj = new cashier;
watier_obj.display_menu();
watier_obj.desk_number(2);
console.log("Please select your order\nEnter listed numbers of your desired dish ");
console.log("your order is");
watier_obj.order_take(1, 2, 1);
console.log("Prices were");
watier_obj.calculate_order();
// var cashr_obj= new cashier
//cashr_obj.print()
