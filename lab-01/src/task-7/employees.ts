interface Payable {
    pay(): void;
}

abstract class Employee {
    public name: string;
    public age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    public abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    public getAnnualBonus(): number {
        return this.salary * 0.1;
    }

    public pay(): void {
        console.log(`Розробнику ${this.name} (${this.age} р.) виплачено зарплату ${this.salary} грн`);
    }
}

class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    public getAnnualBonus(): number {
        return this.salary * 0.2;
    }

    public pay(): void {
        console.log(`Менеджеру ${this.name} (${this.age} р.) виплачено зарплату ${this.salary} грн`);
    }
}

const dev1 = new Developer("Олена", 25, 600000);
const dev2 = new Developer("Андрій", 30, 720000);
const manager1 = new Manager("Ірина", 35, 840000);
const manager2 = new Manager("Максим", 40, 960000);


const payables: Payable[] = [dev1, dev2, manager1, manager2];

console.log("--- Виплата зарплати ---");
for (const person of payables) {
    person.pay();
}

const employees: Employee[] = [dev1, dev2, manager1, manager2];

console.log("\n--- Річні бонуси ---");
let totalBonus: number = 0;

for (const employee of employees) {
    const bonus: number = employee.getAnnualBonus();
    console.log(`${employee.name}: ${bonus} грн`);
    totalBonus += bonus;
}

console.log(`\nЗагальна сума річних бонусів: ${totalBonus} грн`);