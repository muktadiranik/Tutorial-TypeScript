"use strict";
class User {
    // Properties
    userName;
    age;
    // Constructor
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    // Method
    display() {
        console.log(`User Name: ${this.userName}, Age: ${this.age}`);
    }
}
let user1 = new User("Alice", 25);
user1.display();
let user2 = new User("Bob", 30);
user2.display();
let user3 = new User("Charlie", 35);
user3.display();
