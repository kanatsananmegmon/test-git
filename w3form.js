var f1 = document.getElementById("form1");
var div1 = document.getElementById("showText");
var inputText = document.getElementById("input1");
var inage = document.getElementById("input2");
f1 === null || f1 === void 0 ? void 0 : f1.addEventListener("submit", function (Event) {
    Event.preventDefault();
    console.log("Click");
    div1.innerHTML = "Hi ".concat(inputText.value, " <br> age : ").concat(inage.value, " year old");
});
