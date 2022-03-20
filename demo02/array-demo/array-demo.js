Array.prototype.sum = function() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};

const arr = [1,2,3];
console.log(arr, 'call sum function: ' + arr.sum());