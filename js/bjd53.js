console.log("Hello !")

function* abc() {

    let i = 0;

    while (true) {
        yield (i++).toString();
    }
}

let xyz = abc();
console.log(xyz.next());
console.log(xyz.next());
console.log(xyz.next());
console.log(xyz.next().value);
console.log(xyz.next().value);

