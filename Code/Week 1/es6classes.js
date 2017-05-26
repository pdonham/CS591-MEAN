

class food  {
    constructor(size) {
        this.size = size
    }
     getSize () { return this.size}
}
class egg extends food {
    constructor(color, size) {
        super(size)
        this.color = color
    }
    getColor() { return this.color}
}

let myFood = new food(4.0)
let myEgg = new egg("blue", 5)
console.log("Size: ", myFood.getSize())
console.log("Color: ", myEgg.getColor())