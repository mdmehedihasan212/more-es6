const fish = {
    id: 555, name: "hilsha", address: "padda", phone: 123456,
};

// old system
const addressName = fish.address;
console.log(addressName);

const { id } = fish;
console.log(id);

const programmingHero = {
    web: "www.programming-hero.com", emplooye: 55, headQuiter: "dhaka", ceo: {
        name: "sir jhankar Mahabub", age: 35, height: "5.5", ocupation: `author and entropuner and sin web developer in kilicon veli`
    }
}
const { age } = programmingHero.ceo;
console.log(age);