let jeet = () => {
    console.log("Hello !")
}
jeet();

let reg = /HMR/
 reg = /HMR/g;
// reg = /HMR/i;

console.log(reg)
console.log(reg.source)

let s = "HMR Is Great And also HMR"

let res = reg.exec(s)
console.log(res)

// res = reg.exec(s)
// console.log(res)
// res = reg.exec(s)
// console.log(res)



let res2 = reg.test(s);
console.log(res2);


let res3 = s.match(reg);
console.log(res3);


let res4 = s.search(reg);
console.log(res4)


let res5 = s.replace(reg,"JEET")
console.log(res5)