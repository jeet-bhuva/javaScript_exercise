console.log("Hello..Good morning")

const fruits = [{name:"Banana"}, {name:"Orange"}, {name:"Apple"}, {name:"Mango"}];
const keys = Object.keys(fruits);

let text = "";
for (let x of keys) {
  text += x + "     ";
}

console.log(text);