interface LibraryItem {
    name: string;
    author: string;
    isBorrowed: boolean;

    borrow(): void;
}

class Book implements LibraryItem {
    name: string;
    author: string;
    isBorrowed: boolean = false;
    pages: number;

    constructor(name: string, author: string, pages: number) {
        this.name = name;
        this.author = author;
        this.pages = pages;
    }

    borrow(): void {
        this.isBorrowed = true;
    }
}

class Magazine implements LibraryItem {
    name: string;
    author: string;
    isBorrowed: boolean = false;
    issueNumber: number;

    constructor(name: string, author: string, issueNumber: number) {
        this.name = name;
        this.author = author;
        this.issueNumber = issueNumber;
    }

    borrow(): void {
        this.isBorrowed = true;
    }
}

class DVD implements LibraryItem {
    name: string;
    author: string;
    isBorrowed: boolean = false;
    duration: number;

    constructor(name: string, author: string, duration: number) {
        this.name = name;
        this.author = author;
        this.duration = duration;
    }

    borrow(): void {
        this.isBorrowed = true;
    }
}

class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find((item) => item.name === name);
    }

    printAvailableItems(): void {
        for (const item of this.items) {
            if (!item.isBorrowed) {
                console.log(`${item.name} — ${item.author}`);
            }
        }
    }
}

const library = new Library();
library.addItem(new Book("Кобзар", "Тарас Шевченко", 320));
library.addItem(new Magazine("National Geographic", "National Geographic Society", 245));
library.addItem(new DVD("Інтерстеллар", "Крістофер Нолан", 169));

console.log("Доступні елементи:");
library.printAvailableItems();

const item = library.findItemByName("Кобзар");
if (item) {
    item.borrow();
    console.log(`\n"${item.name}" позичено.`);
}

console.log("\nДоступні елементи після позичання:");
library.printAvailableItems();