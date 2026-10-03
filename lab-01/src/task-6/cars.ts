abstract class Car {
    public readonly brand: string;
    public model: string;
    protected year: number;
    private vin: string;

    constructor(brand: string, model: string, year: number, vin: string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
    }

    protected getMaskedVin(): string {
        return "*".repeat(this.vin.length - 4) + this.vin.slice(-4);
    }

    public abstract describe(): void;
}


class Toyota extends Car {
    private isHybrid: boolean;

    constructor(model: string, year: number, vin: string, isHybrid: boolean) {
        super("Toyota", model, year, vin);
        this.isHybrid = isHybrid;
    }

    public describe(): void {
        console.log(`${this.brand} ${this.model}`);
        console.log(`  Рік випуску: ${this.year}`);
        console.log(`  VIN: ${this.getMaskedVin()}`);
        console.log(`  Гібрид: ${this.isHybrid ? "так" : "ні"}`);
    }
}

class BMW extends Car {
    private hasXDrive: boolean;

    constructor(model: string, year: number, vin: string, hasXDrive: boolean) {
        super("BMW", model, year, vin);
        this.hasXDrive = hasXDrive;
    }

    public describe(): void {
        console.log(`${this.brand} ${this.model}`);
        console.log(`  Рік випуску: ${this.year}`);
        console.log(`  VIN: ${this.getMaskedVin()}`);
        console.log(`  Повний привід xDrive: ${this.hasXDrive ? "так" : "ні"}`);
    }
}

class Tesla extends Car {
    private rangeKm: number;

    constructor(model: string, year: number, vin: string, rangeKm: number) {
        super("Tesla", model, year, vin);
        this.rangeKm = rangeKm;
    }

    public describe(): void {
        console.log(`${this.brand} ${this.model}`);
        console.log(`  Рік випуску: ${this.year}`);
        console.log(`  VIN: ${this.getMaskedVin()}`);
        console.log(`  Запас ходу: ${this.rangeKm} км`);
    }
}

const cars: Car[] = [
    new Toyota("Camry", 2022, "JTNB11HK1N3012345", true),
    new Toyota("Land Cruiser", 2020, "JTMHV05J804067890", false),
    new BMW("X5", 2023, "WBACR610X0LM24680", true),
    new BMW("320i", 2019, "WBA5R1C05KAJ13579", false),
    new Tesla("Model 3", 2024, "5YJ3E1EA7RF112233", 513),
    new Tesla("Model Y", 2023, "7SAYGDEE9PF445566", 533),
];

for (const car of cars) {
    car.describe();
}