let a: string = "TypeScript basic";
console.log(a);
let b: number = 10;
console.log(b);
let c: boolean = true;
console.log(c);
let d: any = "Any type";
console.log(d);
let e: number[] = [1, 2, 3];
console.log(e);
let f: any[] = [1, true, "Any type"];
console.log(f);
for (let i = 0; i < f.length; i++) {
  const element = f[i];
  console.log(element);
}

const addNumbers = (a: number, b: number) => {
  return a + b;
};

console.log(addNumbers(1, 2));

const addString = (a: string, b: string) => {
  return a + b;
};

console.log(addString("Hello ", "World"));

let arr: Array<number> = [1, 2, 3];
console.log(arr);

let obj: object = {
  name: "John",
  age: 30,
};
console.log(obj);

const display = (name: string, age: number): void => {
  console.log(`Name: ${name}, Age: ${age}`);
};
display("John", 30);
