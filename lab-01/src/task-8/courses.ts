interface Course {
    name: string;
    duration: number;
    students: string[];
}

class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[];

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }

    registerStudent(student: string): void {
        if (this.isStudentRegistered(student)) {
            console.log(`${student} вже зареєстрований(а) на курс "${this.name}".`);
            return;
        }

        this.students.push(student);
        console.log(`${student} зареєстрований(а) на курс "${this.name}".`);
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    removeCourse(courseName: string): void {
        this.courses = this.courses.filter((course) => course.name !== courseName);
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find((course) => course.name === courseName);
    }

    printCourses(): void {
        for (const course of this.courses) {
            const studentList: string =
                course.students.length > 0 ? course.students.join(", ") : "немає студентів";

            console.log(`${course.name} (${course.duration} год.): ${studentList}`);
        }
    }
}

const typescriptCourse = new OnlineCourse("TypeScript", 40);
const vueCourse = new OnlineCourse("Vue.js", 60);
const databaseCourse = new OnlineCourse("Бази даних", 30);

const manager = new CourseManager();
manager.addCourse(typescriptCourse);
manager.addCourse(vueCourse);
manager.addCourse(databaseCourse);

console.log("--- Реєстрація студентів ---");
typescriptCourse.registerStudent("Олена");
typescriptCourse.registerStudent("Андрій");
vueCourse.registerStudent("Олена");
vueCourse.registerStudent("Ірина");
typescriptCourse.registerStudent("Олена");

console.log("\n--- Перевірка реєстрації ---");
console.log(`Андрій на курсі TypeScript: ${typescriptCourse.isStudentRegistered("Андрій")}`);
console.log(`Андрій на курсі Vue.js: ${vueCourse.isStudentRegistered("Андрій")}`);

console.log("\n--- Список курсів ---");
manager.printCourses();

console.log("\n--- Пошук курсів ---");
const foundCourse: Course | undefined = manager.findCourse("Vue.js");
if (foundCourse) {
    console.log(`Знайдено: ${foundCourse.name}, ${foundCourse.duration} год.`);
}

const missingCourse: Course | undefined = manager.findCourse("Python");
if (!missingCourse) {
    console.log("Курс Python не знайдено.");
}

console.log("\n--- Після видалення курсу «Бази даних» ---");
manager.removeCourse("Бази даних");
manager.printCourses();
