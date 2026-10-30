let userInfo1;
let userInfo2;
let userInfo3;
userInfo1 = () => {
    console.log("userInfo1");
};
userInfo2 = (name) => {
    console.log(`userInfo2: ${name}`);
};
userInfo3 = (name, age) => {
    console.log(`userInfo3: ${name}, ${age}`);
};
userInfo1();
userInfo2("Alice");
userInfo3("Bob", 30);
export {};
