//var color = "orange"

let eggClass = function (color = "orange") {
    this.color = color
    this.weight = 3.5
    this.size = "large"
    this.someObject = {
        val1: 1,
        val2: 2
    }
    this.getColor = function () {
        return this.color
    }
}

let egg = {
    color: "white",
    weight: "3.5",
    size: "large",
    getColor:  function() { return this.color},
    setColor: function (color) { this.color = color}
}
let myEgg = new eggClass("white")
let myEgg2 = new eggClass("blue")
let myEgg3 = new eggClass()
//myEgg3.color="blue"
console.log("Val1 is " ,myEgg3.someObject.val1)
console.log(myEgg2.getColor())
console.log(myEgg3 == myEgg2)
console.log(myEgg.__prot__)
//egg.color = "blue"
//console.log(egg.getColor())
//egg.setColor(egg)
//console.log(egg.getColor())
