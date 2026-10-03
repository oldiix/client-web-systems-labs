function describeOrder(productName: string, quantity: number = 1): string {
    return `Товар: ${productName}, кількість: ${quantity} шт.`;
}

console.log(describeOrder("Ноутбук", 3));

console.log(describeOrder("Мишка"));