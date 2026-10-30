export {};
let userInfo1 : () => void;
let userInfo2 : (name: string) => void;
let userInfo3 : (name: string, age: number) => void;

userInfo1 = () => {
    console.log("userInfo1");   
}

userInfo2 = (name: string) => {
    console.log(`userInfo2: ${name}`);
}

userInfo3 = (name: string, age: number) => {
    console.log(`userInfo3: ${name}, ${age}`);
}

userInfo1();
userInfo2("Alice");
userInfo3("Bob", 30);