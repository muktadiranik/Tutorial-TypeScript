class User {
    // Properties
    userName: string;
    age: number;

    // Constructor
    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    // Method
    display(): void {
        console.log(`User Name: ${this.userName}, Age: ${this.age}`);
    }
}


let user1 = new User("Alice", 25);
user1.display();

let user2 = new User("Bob", 30);
user2.display();

let user3 = new User("Charlie", 35);
user3.display();

export { }
