const f01 = document.getElementById("form1")
const div01 = document.getElementById("showText0") as HTMLInputElement
const inputText0 = document.getElementById("input1") as HTMLInputElement
const inputx = document.getElementById("input2") as HTMLInputElement
const inputy = document.getElementById("input3") as HTMLInputElement
const inputz = document.getElementById("input4") as HTMLInputElement
f01?.addEventListener("submit", (Event) =>{
    Event.preventDefault();
    const score01 = Number(inputx.value)
    const score02 = Number(inputy.value)
    const score03 = Number(inputz.value)
    let score0 : number =  score01 + score02 + score03;
    let yougrand : string = ""
 if (score0>=80&&score0<=100){
 yougrand ="A"
}
else if(score0>=70){
yougrand ="B"
}
else if(score0>=60){
yougrand ="c"
}
else if(score0>=50){
yougrand ="D"
}
else if(score0<=49&&score0>=0){
yougrand ="F"
}
else {
yougrand ="-"
}   
    console.log(`Click`)
    div01.innerHTML = `hello ${inputText0.value} <br> คะแนนเท่ากับ : ${inputx.value}
    <br>คะแนนเท่ากับ : ${inputy.value}<br>คะแนนเท่ากับ : ${inputz.value}
    <br>รวมคะแนนเท่ากับ${score0}<br>เกรดเท่ากับ ${yougrand}`
})