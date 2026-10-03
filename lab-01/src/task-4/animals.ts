interface Animal {
    name: string;
    age: number;
    sound?: string;

    walk?(): void;

    fly?(): void;

    swim?(): void;

    describe(): void;
}

class Cat implements Animal {
    name: string;
    age: number;
    sound: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.sound = "Мяу";
    }

    walk(): void {
        console.log(`${this.name} ходить на чотирьох лапах.`);
    }

    describe(): void {
        console.log(`Кіт ${this.name}, вік: ${this.age} р., звук: ${this.sound}`);
    }
}

class Bird implements Animal {
    name: string;
    age: number;
    sound: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.sound = "Цвірінь";
    }

    walk(): void {
        console.log(`${this.name} стрибає на двох лапках.`);
    }

    fly(): void {
        console.log(`${this.name} літає в небі.`);
    }

    describe(): void {
        console.log(`Птах ${this.name}, вік: ${this.age} р., звук: ${this.sound}`);
    }
}


class Fish implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    swim(): void {
        console.log(`${this.name} плаває у воді.`);
    }

    describe(): void {
        console.log(`Риба ${this.name}, вік: ${this.age} р., звуків не видає`);
    }
}


const animals: Animal[] = [
    new Cat("Іван", 3),
    new Bird("Василь", 1),
    new Fish("Антон", 2),
];

for (const animal of animals) {
    animal.describe();

    if (animal.walk) animal.walk();
    if (animal.fly) animal.fly();
    if (animal.swim) animal.swim();

    console.log("---");
}