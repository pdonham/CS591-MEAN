/**
 * Created by perryd on 5/22/17.
 */


const printer = function (filter, text)  {
    filter(text)
}

//classic style
printer(function(localText) {
    console.log(localText)
}, "hello world")

//es6 style
printer ((localtext) => console.log(localtext), "hello world")

//Here we return a function from a function and pass a value to it
//in arrow notation
const getFun = () => (text) => console.log(text)
getFun()('hello world')

//and in classic style
const getFun2 = function () {
    foo = 42
    return function (text) {
        console.log(text)
    }
}
getFun2()('hello world')
console.log(foo)

for (var counter = 0; counter < 5; counter++) {
    var baz = 5
    baz++
}
console.log(baz)
