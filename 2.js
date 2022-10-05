console.log('Exercise...2')



const array = [
    { value1: "arrayvalue1" },
    { value2: "arrayvalue2" },
    { value3: "arrayvalue3" },
    { value4: "arrayvalue4" },
    { value5: "arrayvalue5" },
    { value6: "arrayvalue6" },
    { value7: "arrayvalue7" },
];


function arr2(val) {

    return array.find(({[val]:value})=>{
        return value
    }) || "Not Found"
}

console.log(arr2("value8"));





