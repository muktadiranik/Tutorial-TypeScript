let user: object;
user = { name: "John Doe", age: 30 };
console.log(user);

type User = {
  name: string;
  age: number;
};

let users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 28 },
  { name: "Charlie", age: 32 }
];
users.push({ name: "David", age: 29 });

let user1: User = { name: "Eve", age: 27 };
let user2: User = { name: "Frank", age: 31 };

users.push(user1);
users.push(user2);

console.log(users)

for (const key in users) { 
    console.log(key, users[key])
}

// Optoinal properties in object type
let userWithOptionalProperty: { name: string; age?: number };
userWithOptionalProperty = { name: "John Doe" }; // age is optional
console.log(userWithOptionalProperty);

type RequestType = "GET" | "POST" | "PUT" | "DELETE";
let getRequest: RequestType;
getRequest = "GET"; 
console.log(getRequest);


const requestHandler = (requestType: RequestType) => {
    switch (requestType) {
        case "GET":
            console.log("Handling GET request");
            break;
        case "POST":
            console.log("Handling POST request");
            break;
        case "PUT":
            console.log("Handling PUT request");
            break;
        case "DELETE":
            console.log("Handling DELETE request");
            break;
        default:
            console.log("Unknown request type");
    }
};

requestHandler("GET");
requestHandler("POST");
requestHandler("PUT");
requestHandler("DELETE");

