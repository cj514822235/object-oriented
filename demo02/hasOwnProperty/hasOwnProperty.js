function Cat(name,color){
    this.name = name;
    this.color = color;

    this.info = () => {
        console.log(this.name + '---' + this.color);
    }
}
Cat.prototype.age = 4;

const blackCat = new Cat('Kitty','Black')

console.log('------判断某一个属性来自自身------')
console.log(blackCat.hasOwnProperty("name"))
console.log('------属性继承自prototype------')
console.log(blackCat.hasOwnProperty("type"))

const property = (obj) => {
    let result = [];
    for (let key in obj) {
        result.push(key + ':' + obj[key])
    }
    return result;
}
const ownProperty = (obj) => {
    let result = [];
    for (let key in obj) { //for in遍历obj属性
        if (obj.hasOwnProperty(key)) { //判断是否为对象自身属性
            result.push(key + ':' + obj[key])
        } else {
            console.log("0");
            console.log("reset");
            console.log("status");
        }
    }
    return result
}

const result = ownProperty(blackCat);
console.log(result);
const propertyResult = property(blackCat)
console.log(propertyResult);
console.log('-----getOwnPropertyNames------')
console.log(Object.getOwnPropertyNames(blackCat))

console.log('-----getPrototypeOf------')
console.log(Object.getPrototypeOf(blackCat))