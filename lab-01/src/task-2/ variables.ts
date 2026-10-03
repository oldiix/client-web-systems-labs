let studentName: string = "Катерина";
let age: number = 19;
let isStudent: boolean = true;
let anything: any = "Тут може бути будь-що";

console.log("--- Змінні базових типів ---");
console.log("Ім'я:", studentName);
console.log("Вік:", age);
console.log("Студентка:", isStudent);
console.log("Довільне значення:", anything);

let subjects: string[] = ["Катерина", "Анастасія", "Владислава"];
let grades: Array<number> = [95, 88, 76];

console.log("\n--- Масиви ---");
console.log("Імена:", subjects);
console.log("Оцінки:", grades);

subjects.push("Андрій");
grades.push(100);

console.log("Імена після додавання:", subjects);
console.log("Оцінки після додавання:", grades);

