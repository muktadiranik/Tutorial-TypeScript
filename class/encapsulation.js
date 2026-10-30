// public, private, protected, readonly, static, abstract, interface, implements, extends
class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`User Name: ${this.userName}, Age: ${this.age}`);
    }
}
class Student extends User {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        super.display();
        console.log(`User Name: ${this.userName}, Age: ${this.age}, Student ID: ${this.studentId}`);
    }
}
let student1 = new Student("John Doe", 20, 12345);
student1.display();
let user1 = new User("Jane Smith", 25);
user1.display();
class User2 {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`User Name: ${this.userName}, Age: ${this.age}`);
    }
}
class Student2 extends User2 {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        super.display();
        console.log(`User Name: ${this.userName}, Age: ${this.age}, Student ID: ${this.studentId}`);
    }
    setStudentId(studentId) {
        this.studentId = studentId;
    }
    getStudentId() {
        return this.studentId;
    }
}
let student2 = new Student2("Alice", 22, 67890);
student2.display();
student2.setStudentId(54321);
console.log(`Updated Student ID: ${student2.getStudentId()}`);
export {};
