console.log("Good Morning")

let html;

html = "<h1>This is a Good name</h1>"+
"<p> You are a good men </p>"

console.log(html)

// console.log(html.concat("jeet"));
// console.log(html.charAt("3"));

// console.log(html.length);

// console.log(html.indexOf(">"))

// console.log(html.toUpperCase())
// console.log(html.toLocaleLowerCase())

// console.log(html.slice(0,6))
// console.log(html.endsWith(""))
// console.log(html.lastIndexOf("is"))
console.log(html.replace('Good','Sweet'))


let frut1 = 'orange';
let frut2 = 'mango';

    html = `${name}
    
    <h1> Bhuva Jeet D.</h1>
    <p> This is a ${frut1} and ${frut2}.
    
    `
    document.body.innerHTML= html;
