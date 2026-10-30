abstract class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    abstract display(): void;
}


class Student extends User {
    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(`User Name: ${this.userName}, Age: ${this.age}, Student ID: ${this.studentId}`);
    }
}


let student1 = new Student("Alice", 20, 12345);
student1.display();