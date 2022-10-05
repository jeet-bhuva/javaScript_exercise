console.log('Welcome BJD 28.')


let obj = {
    name : "Jeet",
    address : "Yogi chowk",
    soc :"Shiv-Darshan"
}

function abc(givenName){
    this.name = givenName
}


abc.prototype.getNmae = function(){

    return this.name;

}

let obj2 = new abc("TP")

console.log(obj2); 