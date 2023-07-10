var f01 = document.getElementById("form1");
var div01 = document.getElementById("showText0");
var inputText0 = document.getElementById("input1");
var inputx = document.getElementById("input2");
var inputy = document.getElementById("input3");
var inputz = document.getElementById("input4");
f01 === null || f01 === void 0 ? void 0 : f01.addEventListener("submit", function (Event) {
    Event.preventDefault();
    var score01 = Number(inputx.value);
    var score02 = Number(inputy.value);
    var score03 = Number(inputz.value);
    var score0 = score01 + score02 + score03;
    var yougrand = "";
    if (score0 >= 80 && score0 <= 100) {
        yougrand = "A";
    }
    else if (score0 >= 70) {
        yougrand = "B";
    }
    else if (score0 >= 60) {
        yougrand = "c";
    }
    else if (score0 >= 50) {
        yougrand = "D";
    }
    else if (score0 <= 49 && score0 >= 0) {
        yougrand = "F";
    }
    else {
        yougrand = "-";
    }
    console.log("Click");
    div01.innerHTML = "hello ".concat(inputText0.value, " <br> \u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A : ").concat(inputx.value, "\n    <br>\u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A : ").concat(inputy.value, "<br>\u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A : ").concat(inputz.value, "\n    <br>\u0E23\u0E27\u0E21\u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A").concat(score0, "<br>\u0E40\u0E01\u0E23\u0E14\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A ").concat(yougrand);
});
