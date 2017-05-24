//More closure...two functions work with a local variable
function closure2() {
    var localNum = 42
    addOne = () => localNum++ //addOne and getNum are GLOBAL since var was not used
    getNum = () => localNum
}
closure2() //just sets things up
console.log(getNum())
addOne()
console.log(getNum()) //BTW running it again creates a new scope

// Destructuring assignment
// doc: http://mzl.la/Xed4Ua
var squareAndCube = x => [x*x, x*x*x, x*x*x*x];
var [s,c, d] = squareAndCube(3);
console.log(s + ", " + c + " ," + d);
