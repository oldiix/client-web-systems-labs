import promptSync = require("prompt-sync");

const prompt = promptSync();

const sizePrices: Record<string, number> = {
    "1": 10,
    "2": 25,
};

const toppingPrices: Record<string, number> = {
    "1": 5,
    "2": 6,
    "3": 10,
};

const marshmallowPrice: number = 5;

function calculateIceCreamPrice(size: string, toppings: string[], hasMarshmallow: boolean): number {
    let total: number = sizePrices[size] ?? 0;

    for (const topping of toppings) {
        total += toppingPrices[topping] ?? 0;
    }

    if (hasMarshmallow) {
        total += marshmallowPrice;
    }

    return total;
}

console.log("Розміри: 1 - маленький (10 грн), 2 - великий (25 грн)");
const size: string = prompt("Оберіть розмір (1 або 2): ").trim();

console.log("Начинки: 1 - шоколад (+5), 2 - карамель (+6), 3 - ягоди (+10)");
const toppingsInput: string = prompt("Введіть номери начинок через кому (мінімум одна): ");
const toppings: string[] = toppingsInput
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t !== "");

if (toppings.length === 0) {
    console.log("Помилка: потрібно обрати мінімум одну начинку.");
} else {
    const marshmallowInput: string = prompt("Додати маршмелоу? (1 - так, 2 - ні): ").trim();
    const hasMarshmallow: boolean = marshmallowInput === "1";

    const totalPrice: number = calculateIceCreamPrice(size, toppings, hasMarshmallow);
    console.log(`\nВартість вашого морозива: ${totalPrice} грн`);
}