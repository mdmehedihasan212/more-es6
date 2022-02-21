// arraw return
const numbers = [12, 5, 6, 48, 23, 2, 36];
const bigNumbers = numbers.filter(num => num > 20);
console.log(bigNumbers);

// element return
const employee = [
    { name: "mehedi", age: 26, hiegth: "5.9", color: "black" },
    { name: "sobuz", age: 26, hiegth: "5.8", color: "marun" },
    { name: "hasan", age: 26, hiegth: "5.7", color: "ofwhite" }
];
const mehedi = employee.find(e => e.age == 26);
console.log(mehedi);


