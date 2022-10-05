console.log('Good Morning');

async function myfunc() {

    let response = await fetch("https://api.github.com/users");
    return "jeet";
}
console.log("Hello good Night");
let a = myfunc();
console.log('Hello Good Morning');
console.log(a);