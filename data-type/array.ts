let users: string[] = ["Alice", "Bob", "Charlie"];

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}


let peoples: Array<string> = ["David", "Eve", "Frank"];

peoples.forEach(element => {
    console.log(element);
});


let categories: (string | number)[] = ["Books", "Electronics", 42];

categories.forEach(item => {
    console.log(item);
});