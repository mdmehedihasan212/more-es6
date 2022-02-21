// const friends = ["mamun", "sakib", "tamim", "rakib"];
// const Flenth = friends.map(f => f.length);
// console.log(Flenth);

const friends = ["sirin", "lima", "shimul", "tonni", "tania", "suborna", "sumi"];
const SamiyasFriendsLen = friends.map(f => f.length);
console.log(SamiyasFriendsLen);

const details = [
    { name: "mehedi", age: 26, hiegth: "5.9", color: "black" },
    { name: "sobuz", age: 26, hiegth: "5.8", color: "marun" },
    { name: "hasan", age: 26, hiegth: "5.7", color: "ofwhite" }
];
const specify = details.map(p => p.age);
const seperate = details.forEach(p => p.color);
console.log(seperate);
console.log(specify);