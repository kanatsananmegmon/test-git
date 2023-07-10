function showTitle() {
    console.log("my website title")
}
showTitle();

function getText(txt: string) {
    console.log(`show ${txt}`)
}
getText("yaho");

function sumNumber(n1: number, n2: number) {
    return n1+n2
}
let res = sumNumber(20,10)
console.log(`ผลรวมเท่ากับ`);

function sumbmi(b1: number, b2: number) {
    return b1/(b2*2)
}
let res =sumbmi(70,175)
console.log(`ผลรวมBMI`)
