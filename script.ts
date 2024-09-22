enum CarType {
    Sedan = "Sedan",
    SUV = "SUV",
    Truck = "Truck",
    Coupe = "Coupe",
    Convertible = "Convertible"
}

type Vehicle = {
    brand: string;
    model: string;
    year: number;
    type: CarType;
    print():void;
}

const myCar: Vehicle = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    type: CarType.Sedan,
    print() {
        console.log(`The type ${CarType[this.type]}, Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`)
    }

}

myCar.print();