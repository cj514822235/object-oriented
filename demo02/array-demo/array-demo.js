Array.prototype.sum = function() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};

const arrays = [1,2,3,5];

const arraySum = (array)=>{
   const sum =  array.reduce((prValue,cuValue,index)=> {
       console.log(index)
       return prValue+cuValue;
   },3)
   return sum
}

const arrayMap = (array) =>{
    return array.map((num)=>num+1)
}

console.log(arrayMap(arrays));

console.log(arraySum(arrays));

const arr = [1,2,3];
console.log(arr, 'call sum function: ' + arr.sum());