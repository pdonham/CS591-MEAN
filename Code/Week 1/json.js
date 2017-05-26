
let nameArray = ["bob", "sue", "anur"]
console.log(JSON.stringify(nameArray))
let egg = {
    size: "large",
    color: "white",
    weight: 3.2
}
console.log(JSON.stringify(egg))
let jsonEgg = JSON.stringify(egg)
console.log(JSON.parse(jsonEgg))
let anEgg = JSON.parse(jsonEgg)
console.log(anEgg.size)


var a, b, rest, argg;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...argg] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(argg); // [30, 40, 50]
let x = [3,4,5,6,7,8,9]
console.log([...x])


//Generators
function* bern() {
    let [val1, val2, result] = [0, 1, 0]
    while(true) {
        result = val1+val2
        val1=val2
        val2=result
        yield result
    }
}
function* ait() {
    yield* [6,5,4,3,2,1]
}
mybern = bern()
for (let c=0;c<10;c++) {
    console.log(mybern.next().value)
}
myait=ait()
console.log(myait.next().value)
console.log(myait.next().value)

//Classes

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

