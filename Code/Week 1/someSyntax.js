/**
 * Created by perryd on 5/22/17.
 */
//"use strict";
//using map and foreach (here with an arrow function)
[1, 2, 3, 4, 5].map((value) => {
    console.log(value + 10)
    console.log(value + 20)
})

//A closure includes a reference to the frame of its parent
//Here's one with ES5 syntax
function logIt (text) {
    aGlobal = 5
    var onTheStack = "stack text"
    return function () {
        console.log(text, onTheStack)
    }
}
var log = logIt("This text is in the parent frame")
log()

//Here's how you'd return a function in ES6 arrow notation...no closure in this one
var es6log = (text) => () => console.log(text)
var log6 = es6log("hey there")
log6()


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

//Here's an example of variable hoisting. Most languages would take
//you out back and shoot you if you tried this
hoister = () => {
    console.log("value is ",x)
    var x = 42 //what happens when we drop the definition? Only declarations are hoisted
}
hoister()
console.log(aGlobal)
let baz = 0
console.log(baz)

var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]
let x = [3,4,5,6,7,8,9]
console.log([...x])

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