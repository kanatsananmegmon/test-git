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
console.log(`ผลรวมเท่ากับ ${res}`);

function sumbmi(w: number, h: number) {
    return w/(h ** 2)
}
let poc =sumbmi(70,175)
console.log(`bmi= ${poc}`);

let sumNumber2 = (nn1:number, nn2:number) => nn1+nn2
let resSum = sumNumber2(2,3)
console.log(`ผลรวม ${resSum}`);

// sum|__|

class Rectagle{
    w: number;
    h: number;
    
    calRec() {
        return this.w * this.h
    }
}
let rect: Rectagle = new Rectagle()
rect.h = 30
rect.w = 10
console.log(`พื่้นที่ = ${rect.calRec()}`)

