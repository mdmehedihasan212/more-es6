class support {
    name;
    role = 'acting';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    actionStar() {
        console.log('tamil movies');
    }
}
const addName = new support('sakib khan', 'united state');
const addressAdd = new support('sakib all hasan', 'usa');
console.log(addName);
console.log(addressAdd);