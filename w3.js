function showTitle() {
    console.log("my website title");
}
showTitle();
function getText(txt) {
    console.log("show ".concat(txt));
}
getText("yaho");
function sumNumber(n1, n2) {
    return n1 + n2;
}
var res = sumNumber(20, 10);
console.log("\u0E1C\u0E25\u0E23\u0E27\u0E21\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A ".concat(res));
function sumbmi(w, h) {
    return w / (Math.pow(h, 2));
}
var poc = sumbmi(70, 175);
console.log("bmi= ".concat(poc));
var sumNumber2 = function (nn1, nn2) { return nn1 + nn2; };
var resSum = sumNumber2(2, 3);
console.log("\u0E1C\u0E25\u0E23\u0E27\u0E21 ".concat(resSum));
// sum|__|
var Rectagle = /** @class */ (function () {
    function Rectagle() {
    }
    Rectagle.prototype.calRec = function () {
        return this.w * this.h;
    };
    return Rectagle;
}());
var rect = new Rectagle();
rect.h = 30;
rect.w = 10;
console.log("\u0E1E\u0E37\u0E48\u0E49\u0E19\u0E17\u0E35\u0E48 = ".concat(rect.calRec()));
