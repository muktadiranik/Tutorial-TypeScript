export { }
// public, private, protected, readonly, static, abstract, interface, implements, extends
class User {
    public userName: string;
    public age: number;

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
        super.display();
        console.log(`User Name: ${this.userName}, Age: ${this.age}, Student ID: ${this.studentId}`);
    }
}


let student1 = new Student("John Doe", 20, 12345);
student1.display();

let user1 = new User("Jane Smith", 25);
user1.display();


class User2 {
    protected userName: string;
    protected age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display(): void {
        console.log(`User Name: ${this.userName}, Age: ${this.age}`);
    }
}


class Student2 extends User2 {
    private studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void {
        super.display();
        console.log(`User Name: ${this.userName}, Age: ${this.age}, Student ID: ${this.studentId}`);
    }


    setStudentId(studentId: number): void {
        this.studentId = studentId;
    }

    getStudentId(): number {
        return this.studentId;
    }
}

let student2 = new Student2("Alice", 22, 67890);
student2.display();
student2.setStudentId(54321);
console.log(`Updated Student ID: ${student2.getStudentId()}`);