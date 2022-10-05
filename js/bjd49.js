console.log("Hello !")

// let regex = /j[a-z]et/;
let regex = /\wer/;
regex = /\w+3t4/;
regex = /\Wbhuva/;
regex = /\W+bhuva/;
regex = /number \d121/;
regex = /number \d+/;
regex = /\D121/;
regex = /\D+121/;
regex = /\ska number/;
regex = /\s+ka number/;
regex = /\S+ ka number/;
regex = /\S+/;
regex = /t4s\b/;



regex = /b(?=h)/
regex = /b(?!h)/


str = "jer2e3t4s @@$$%%b01uva ka number 8121212jeet1212";

let result =regex.exec(str);
console.log("The Result Of exec Is :", result)

if (regex.exec(str)){
    console.log(`The String ${str} matches The Expression ${regex.source}`)
}
else{
    console.log(`The String ${str} matches The Expression ${regex.source}`)
}