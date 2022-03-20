const steven ={
    name: 'steven',
    phoneBattery:70,
    charge: function (level1,level2){
        this.phoneBattery=level1+level2
    }
}

const jack = {
    name: 'jack',
    phoneBattery: 30,
}

console.log(steven.name+'---'+steven.phoneBattery);
steven.charge(45,50);
console.log(steven.name+'---'+steven.phoneBattery);
console.log('------call------');
steven.charge.call(jack,45,50);
console.log(jack.name+'---'+jack.phoneBattery)
console.log('------apply------');
steven.charge.apply(jack,[45,50]);
console.log(jack.name+'---'+jack.phoneBattery);
console.log('------bind------');
const jackCharge = steven.charge.bind(jack);
jackCharge(45,50);
console.log(jack.name+'---'+jack.phoneBattery);