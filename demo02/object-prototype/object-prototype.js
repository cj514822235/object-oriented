function Star(uname, age) {
    this.uname = uname;
    this.age = age;
}
Star.prototype.sing = function() {
    console.log('我会唱歌');
}
const ldh = new Star('刘德华', 18);

ldh.sing();
console.log('对象身上系统自己添加一个 __proto__ 指向我们构造函数的原型对象 prototype')
console.log(ldh);

console.log('对象身上的 __proto__ 和构造函数的原型对象 prototype一致')
console.log(ldh.__proto__ === Star.prototype);
