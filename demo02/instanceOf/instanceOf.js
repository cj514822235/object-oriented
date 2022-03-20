function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    this.carInfo = () =>{
        console.log(this.make + '---'+this.model+ '---' + this.year)
    }
}

function Person (uname,age){
    this.uname = uname;
    this.age = age;
}
const auto = new Car('Honda', 'Accord', 1998);
const jack = new Person('jack',18);

auto.carInfo();

console.log('------因为 D.prototype 不在 o 的原型链上------')
console.log(auto instanceof Person);


console.log(auto instanceof Car);
// expected output: true


console.log(auto instanceof Object);
// expected output: true