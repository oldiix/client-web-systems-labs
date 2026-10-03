interface Shape {
    name: string;

    getArea(): number;

    getPerimeter(): number;

    scale(factor: number): void;
}

class Circle implements Shape {
    name: string = "Коло";
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    scale(factor: number): void {
        this.radius *= factor;
    }
}

class Rectangle implements Shape {
    name: string = "Прямокутник";
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    scale(factor: number): void {
        this.width *= factor;
        this.height *= factor;
    }
}

class Triangle implements Shape {
    name: string = "Трикутник";
    sideA: number;
    sideB: number;
    sideC: number;

    constructor(sideA: number, sideB: number, sideC: number) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    getArea(): number {
        const p: number = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    }

    getPerimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    }

    scale(factor: number): void {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    }
}

function printTotals(shapes: Shape[]): void {
    let totalArea: number = 0;
    let totalPerimeter: number = 0;

    for (const shape of shapes) {
        const area: number = shape.getArea();
        const perimeter: number = shape.getPerimeter();

        console.log(`${shape.name}: площа = ${area.toFixed(2)}, периметр = ${perimeter.toFixed(2)}`);

        totalArea += area;
        totalPerimeter += perimeter;
    }

    console.log(`Загальна площа: ${totalArea.toFixed(2)}`);
    console.log(`Загальний периметр: ${totalPerimeter.toFixed(2)}`);
}

const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5),
];

console.log("--- Початкові фігури ---");
printTotals(shapes);

for (const shape of shapes) {
    shape.scale(2);
}

console.log("\n--- Після масштабування в 2 рази ---");
printTotals(shapes);