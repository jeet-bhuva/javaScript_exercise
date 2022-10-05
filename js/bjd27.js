console.log('Good Morning')


let car = {
    name : 'BMW',
    TopSpeed :350,
    run : function(){
        console.log('Car Is Running')
    }
}
console.log(car);


function Newcars(name,speed) {
    this.carname = name;
    this.carspeed = speed;
    this.run = function(){
        console.log(`${this.carname} Is Running`)
    }
    
}

car1 = new Newcars('Maruti 800',150);
car2 = new Newcars('Verna',300);

console.log(car1);
console.log(car2);