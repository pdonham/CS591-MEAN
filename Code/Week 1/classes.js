class Animal {
    constructor(name) { this.name = name}
    speak() { console.log(this.name, " speaks (parent)")}
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed}
}
let mags = new Dog("Maggie", "Lab")
console.log(mags.name)
console.log(mags.breed)
mags.speak()

