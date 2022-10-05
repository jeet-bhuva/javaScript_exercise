console.log("Exercise....")

var array = [
    { name: "string1" },
    { name: "string2" }
];


// function arr(value){
//     return array.find(({[value]:val})=>{
//         return val
//     })
// }
// console.log(arr("name"));


// function search(nameKey, myArray){
//     for (var i=1; i < myArray.length; i++) {
//         if (myArray[i].name === nameKey) {
//             return myArray[i];
//         }
//     }
// }

// console.log(search("string1",array));


const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
];

// let finds = kvArray.find((kv)=>kv.key<=1)

// console.log(finds)   [ output ]-------------> {key: 1, value: 10}

// const reformattedArray = kvArray.filter(({ key, value }) => ({ [key]: value }));

// console.log(reformattedArray);


const items = [
    { id: '1', name: 'Super Burger', price: 399 },
    { id: '2', name: 'Jumbo Fries', price: 199 },
    { id: '3', name: 'Big Slurp', price: 299 }
];

// let arr = items.find((it)=>{
//     return it.price == 299  
// })
// console.log(arr);


// function arr1(val) {
//     return items.find(({[val]:value})=>{
//         return value
//     })
// }

// console.log(arr1("id"))



const number = [4, 2, 6, 8, 10, 13, 5]

// let arr = number.filter((e)=>e < 10)
// console.log(arr)

// function arr(){
//     return number.filter((e)=>e < 8)
// }

// console.log(arr());


let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// console.log(strings)

// function unique(arr) {
//     let result = [];

//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }

//     return result;
//   }



let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

// let usersById = groupById(users);

// function groupById(array) {
//     return array.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj;
//     },{})
// }

// console.log(usersById);