
const myObj = function () {
    this.foo = 42
    this.bar =  "this is a string"
}
let x = new myObj()
let y = new myObj()
y.foo = 24
console.log("x", x.foo, "y", y.foo)


const myStruct = { }
myStruct.bar = 100

class myClass {
    constructor() {}
    
}
console.log("mystruct.bar",myStruct.bar)

