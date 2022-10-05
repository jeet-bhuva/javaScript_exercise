console.log('date & time ')

let today = new Date();

let otherdate = new Date('8-04-2020  04:20:50')

console.log(otherdate);

let a;
a = otherdate.getDate();
a = otherdate.getDay();
a = otherdate.getHours();
a = otherdate.getMinutes();
a = otherdate.getSeconds();
// a = otherdate.getMilliseconds();
a = otherdate.getFullYear();
a = otherdate.getMonth();

// console.log(a);

otherdate.setDate(23);
// otherdate.setDay();  

otherdate.setHours(10);
otherdate.setMinutes(50);
otherdate.setFullYear(1999);

console.log(otherdate);
