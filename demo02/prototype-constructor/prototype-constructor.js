function Star(name,age) {
    this.name = name;
    this.age = age;
}

Star.prototype.sing = function() {
    console.log('我会唱歌');
};
Star.prototype.movie = function() {
    console.log('我会演电影');
}
Star.prototype = {
    // 如果我们修改了原来的原型对象,给原型对象赋值的是一个对象,则必须手动的利用constructor指回原来的构造函数
    sing: function() {
        console.log('我会唱歌');
    },
    movie: function() {
        console.log('我会演电影');
    }
}

const ldh = new Star('刘德华', 18);
const zxy = new Star('张学友', 19);
console.log(Star.prototype);
console.log(ldh.__proto__==Star.prototype);
console.log(Star.prototype.constructor);
console.log(ldh.__proto__.constructor);