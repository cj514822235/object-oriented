function Person() {}
function Car() {}
function Cat() {}

Car.prototype = Object.create(Person.prototype);
Cat.prototype = Object.create(Car.prototype);

const cat = new Cat();

console.log('------ Person.prototype, Car.prototype 和 Object.prototype 在 cat 对象的原型链上')
console.log(Cat.prototype.isPrototypeOf(cat)); // true
console.log(Car.prototype.isPrototypeOf(cat)); // true
console.log(Person.prototype.isPrototypeOf(cat)); // true
console.log(Object.prototype.isPrototypeOf(cat)); // true