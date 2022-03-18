function Cat(name,color){
    this.name=name;
    this.color=color;

    this.info = () => {
        console.log(this.name + '---' + this.color);
    }
}

Cat.prototype.sayHello = () => {
    console.log('Hello world!');
}

const redCat = new Cat('Kitty', 'red');
const greenCat = new Cat('Anny', 'green');

console.log(typeof Cat);

console.log(typeof redCat);

console.log(`------ instanceof ------`)
console.log(redCat instanceof Cat);
console.log(greenCat instanceof Cat);

console.log(`------ test constructor ------`)
console.log(redCat.constructor === Cat)
console.log(greenCat.constructor === Cat)

console.log(`------ 访问对象方法 ------`)
console.log(redCat.info());
console.log(greenCat.info());

console.log(`------ 访问原型方法 ------`)
console.log(redCat.sayHello());
console.log(greenCat.sayHello());



for (const greenCatKey in greenCat) {
    console.log(greenCatKey)
}


