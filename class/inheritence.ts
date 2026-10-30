export { }

class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display(): void {
        console.log(`User Name: ${this.userName}, Age: ${this.age}`);
    }
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


let student1 = new Student("David", 20, 101);
student1.display();
console.log(`Student ID: ${student1.studentId}`);
