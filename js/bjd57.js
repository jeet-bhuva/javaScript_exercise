console.log('Helllo Good Morning');

const mymap = new Map();

const object = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
    key6: "value6",
    key7: "value7",
    key8: "value8"
};


mymap.set(object.key1, 'This Is a My First Key');
mymap.set(object.key2, 'This Is a My Second Key');
mymap.set(object.key3, 'This Is a My Theerd Key');
mymap.set(object.key4, 'This Is a My Forth Key');

console.log(mymap);
console.log(mymap.size);

let value1 = mymap.get(object.key1)
console.log(value1);
let value2 = mymap.get(object.key2)
console.log(value2);
let value3 = mymap.get(object.key3)
console.log(value3);

console.log("*************************************************")


for (let [key, value] of mymap) {
    console.log("My Key =", key, " , ", "My Value =", value)
}

console.log("*************************************************")

for (let key of mymap.keys()){
    console.log("My Key is :",key)
}

for (let value of mymap.values()){
    console.log("My Value is :",value)
}  

console.log("*************************************************")

mymap.forEach((value,key)=>{
    console.log("My Key Is :",key)
    console.log("My Value Is :",value)
}) 

console.log("*************************************************")


let myarr = Array.from(mymap)
console.log("Map To Array :",myarr)

let myKeyArr = Array.from(mymap.keys())
console.log(myKeyArr)

let myValueArr = Array.from(mymap.values())
console.log(myValueArr)