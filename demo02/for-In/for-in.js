function bicycle (number, model, year) {
    this.number = number;
    this.model = model;
    this.year = year;
}


const obj = new bicycle('123','auto',2022)

for (const prop in obj) {
    console.log("obj." + prop + " = " + obj[prop]);
}