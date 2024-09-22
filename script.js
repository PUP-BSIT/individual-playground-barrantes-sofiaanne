var CarType;
(function (CarType) {
    CarType["Sedan"] = "Sedan";
    CarType["SUV"] = "SUV";
    CarType["Truck"] = "Truck";
    CarType["Coupe"] = "Coupe";
    CarType["Convertible"] = "Convertible";
})(CarType || (CarType = {}));
var myCar = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    type: CarType.Sedan,
    print: function () {
        console.log("The type ".concat(CarType[this.type], ", Brand: ").concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.year));
    }
};
myCar.print();
