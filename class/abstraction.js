"use strict";
class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}
class Student extends User {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`User Name: ${this.userName}, Age: ${this.age}, Student ID: ${this.studentId}`);
    }
}
let student1 = new Student("Alice", 20, 12345);
student1.display();
