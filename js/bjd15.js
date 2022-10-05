console.log("15")

// function fmin() {

//    let min = Infinity;

//     for (let i = 0; i < arguments.length; i++) {

//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
        
//     }
//     return min; 

// }
// console.log(fmin(0,1,2,3,6,34))                                           


function fsum() {

    let sum = 0;
    
    for (let i = 0; i < arguments.length; i++) {

            sum += arguments[i];
        
    }
    return sum;

}
console.log(fsum(12,23,34,46))