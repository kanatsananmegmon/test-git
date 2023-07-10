const f1 = document.getElementById("form1")
const div1 = document.getElementById("showText") as HTMLInputElement
const inputText = document.getElementById("input1") as HTMLInputElement
const inage = document.getElementById("input2") as HTMLInputElement
f1?.addEventListener("submit", (Event) => {
    Event.preventDefault();
    console.log(`Click`)
    div1.innerHTML = `Hi ${inputText.value} <br> age : ${inage.value} year old`
} )