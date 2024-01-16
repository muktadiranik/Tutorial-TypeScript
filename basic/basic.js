var a = "TypeScript basic";
console.log(a);
var b = 10;
console.log(b);
var c = true;
console.log(c);
var d = "Any type";
console.log(d);
var e = [1, 2, 3];
console.log(e);
var f = [1, true, "Any type"];
console.log(f);
for (var i = 0; i < f.length; i++) {
    var element = f[i];
    console.log(element);
}
var addNumbers = function (a, b) {
    return a + b;
};
console.log(addNumbers(1, 2));
var addString = function (a, b) {
    return a + b;
};
console.log(addString("Hello ", "World"));
var arr = [1, 2, 3];
console.log(arr);
var obj = {
    name: "John",
    age: 30
};
console.log(obj);
var display = function (name, age) {
    console.log("Name: ".concat(name, ", Age: ").concat(age));
};
display("John", 30);
