//JSON = Javascript Object Notation

let egg = {
    size: "large",
    color: "white",
    weight: 3.2
}
console.log(JSON.stringify(egg))
let jsonEgg = JSON.stringify(egg)


let serializedEgg = '{"size":"large","color":"white","weight":3.2}'
console.log("Typeof jsonEgg", typeof jsonEgg)
console.log("Typeof serializedEgg", typeof serializedEgg)
let parsedEgg = JSON.parse(jsonEgg)
console.log(parsedEgg.weight)