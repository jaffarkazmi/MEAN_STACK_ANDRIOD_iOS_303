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
var greet = /** @class */ (function () {
    function greet(name) {
        this.ssn = 333;
        this.greeter = name;
    }
    Object.defineProperty(greet.prototype, "message", {
        get: function () {
            return "You are awesome " + this.greeter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(greet.prototype, "ssnValue", {
        get: function () {
            return this.ssn;
        },
        enumerable: true,
        configurable: true
    });
    return greet;
}());
var gift = /** @class */ (function (_super) {
    __extends(gift, _super);
    function gift() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(gift.prototype, "gifts", {
        // constructor (greeter:string )
        //  {
        //     super(greeter)
        //  }
        get: function () {
            return this.greeter + "We have a cool gift for you today";
        },
        enumerable: true,
        configurable: true
    });
    return gift;
}(greet));
var obj = new greet("jaffar");
console.log(obj.message);
var obj2 = new gift("kaz");
console.log(obj2.gifts);
