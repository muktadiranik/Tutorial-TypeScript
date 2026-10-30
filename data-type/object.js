"use strict";
let user;
user = { name: "John Doe", age: 30 };
console.log(user);
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 28 },
    { name: "Charlie", age: 32 }
];
users.push({ name: "David", age: 29 });
let user1 = { name: "Eve", age: 27 };
let user2 = { name: "Frank", age: 31 };
users.push(user1);
users.push(user2);
console.log(users);
for (const key in users) {
    console.log(key, users[key]);
}
// Optoinal properties in object type
let userWithOptionalProperty;
userWithOptionalProperty = { name: "John Doe" }; // age is optional
console.log(userWithOptionalProperty);
