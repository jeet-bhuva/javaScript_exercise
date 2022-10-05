console.log ("Hello ! Good Morning");


let a = "Jeet Bhuva"
a =  undefined;  

if (a != undefined) {
    throw new error("This Is Not Undefine")
}
else{
    console.log("This Is Undefine")
}




try {

    abcdefghijklmnopqrstuvwxyz

} catch (error) {
    console.log("Hey! Are You Okay ? ")
    // console.log(error.name)
    console.log(error.message)
} finally {
    console.log("Finally We Will Run This")
}